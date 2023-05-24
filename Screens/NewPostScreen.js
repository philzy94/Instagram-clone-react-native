import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaView from "../helper/SafeAreaView";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
