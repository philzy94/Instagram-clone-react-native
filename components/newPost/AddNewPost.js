import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios-glyphs/ffffff/480/back.png",
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  );
};

export default AddNewPost;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
});
