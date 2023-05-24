import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import firebase from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valide email")
    .required("An email is required"),
  password: Yup.string().required("Password is required"),
});

const auth = getAuth();
const onLogin = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //console.log(user);
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(error.code);
      Alert.alert("Login Error", errorMessage, [
        {
          text: "Ok",
          onPress: () => console.log("ok"),
          style: "cancel",
        },
        {
          text: "Sign Up",
          onPress: () => console.log("Cancel Pressed"),
        },
      ]);
    });
};
const LoginForm = ({ navigation }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginFormSchema}
      onSubmit={(values) => {
        onLogin(values.email, values.password);
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
                placeholder="Phone number, username or email"
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
              <Text style={{ color: "blue" }}>Forgot password</Text>
            </View>
            <Button onPress={handleSubmit} title="Log in" disabled={!isValid} />
            <View style={styles.signupContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("SignUpScreen");
                }}
              >
                <Text style={{ color: "blue" }}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;

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
