import { StyleSheet, Image, TextInput, View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Divider } from "react-native-elements/dist/divider/Divider";

const PLACEHOLDER_IMG =
  "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string()
    .url("Must be a valide URL")
    .required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the maximun character"),
});

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{
        imageUrl: "",
        caption: "",
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
        console.log("Your post was submited succesfully");
        navigation.goBack();
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
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a caption ..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white" }}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ color: "red" }}>{errors.imageUrl}</Text>
          )}

          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
