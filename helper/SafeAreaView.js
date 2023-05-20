import React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

export default (props) => {
  const { style, ...newProps } = { ...props };
  return (
    <SafeAreaView style={[styles.AndroidSafeArea, props.style]} {...newProps}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
