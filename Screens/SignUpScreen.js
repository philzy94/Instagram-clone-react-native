import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaView from "../helper/SafeAreaView";
import SignUpForm from "../components/singnUp/SignUpForm";

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
        </View>
        <SignUpForm navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
