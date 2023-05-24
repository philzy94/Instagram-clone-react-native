import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const SignUpFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valide email")
    .required("An email is required"),
  username: Yup.string()
    .min(2, "You can only have minimum of 2 characters")
    .required("A username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Your password has to have at least 8 characters"),
});
const getProfilePic = async () => {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      return "hello";
      return data.results[0].picture.large;
      // Process the received data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.log("Error:", error);
    });
};
const auth = getAuth();
const onSignUP = async (email, password, username) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      addDoc(collection(db, "users"), {
        owner_uid: user.uid,
        email: email,
        username: username,
        profile_pic: "image",
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      //console.log(errorMessage);
      // ..
    });
};
const SignUpForm = ({ navigation }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        username: "",
      }}
      validationSchema={SignUpFormSchema}
      onSubmit={(values) => {
        // same shape as initial values
        onSignUP(values.email, values.password, values.username);
        //navigation.goBack();
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        isValid,
      }) => (
        <>
          <View style={styles.wrapper}>
            <View
              style={[
                styles.inputField,
                { borderColor: errors.email ? "red" : "#ccc" },
              ]}
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor="#444"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <View
              style={[
                styles.inputField,
                { borderColor: errors.username ? "red" : "#ccc" },
              ]}
            >
              <TextInput
                placeholder="Username"
                placeholderTextColor="#444"
                autoCapitalize="none"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            {errors.username && (
              <Text style={{ color: "red" }}>{errors.username}</Text>
            )}
            <View
              style={[
                styles.inputField,
                { borderColor: errors.password ? "red" : "#ccc" },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "blue" }}></Text>
            </View>
            <Button
              onPress={handleSubmit}
              title="Sign Up"
              disabled={!isValid}
            />
            <View style={styles.signupContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Text style={{ color: "blue" }}> Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginVertical: 5,
    borderWidth: 1,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
  },
});
