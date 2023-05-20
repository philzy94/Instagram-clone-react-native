import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { USERS } from "../../data/users";
import { ScrollView } from "react-native";
import { Image } from "react-native";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => {
          return (
            <View key={index} style={{ alignItems: "center" }}>
              <Image
                style={styles.story}
                source={{
                  uri: story.image,
                }}
              />
              <Text style={{ color: "white" }}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "..."
                  : story.user.toLowerCase()}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
