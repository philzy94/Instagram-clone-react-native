import { StyleSheet, Text } from "react-native";
import React from "react";
import SafeAreaView from "../helper/SafeAreaView";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { ScrollView } from "react-native";
import { POSTS } from "../data/posts";
import BottomTaps, { bottomTabIcons } from "../components/home/BottomTaps";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </ScrollView>
      <BottomTaps icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
