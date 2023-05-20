import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
    inactive:
      "https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj",
  },
];

const BottomTaps = ({ icons }) => {
  const [activeTap, setActiveTap] = useState("Home");
  const Icon = ({ icon }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setActiveTap(icon.name);
        }}
      >
        <Image
          source={{
            uri: activeTap == icon.name ? icon.active : icon.inactive,
          }}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Divider width={1} />
      <View style={styles.container}>
        {icons.map((icon, index) => {
          return <Icon key={index} icon={icon} />;
        })}
      </View>
    </View>
  );
};

export default BottomTaps;

const styles = StyleSheet.create({
  wrapper: {},
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    height: 50,
  },
});
