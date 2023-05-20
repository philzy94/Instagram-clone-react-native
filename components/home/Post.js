import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
const postFootersIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    likedImageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/filled-like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff//speech-bubble--v1.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/ios/fluency-systems-regular/60/ffffff//sent--v1.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff//bookmark-ribbon.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider orientation="vertical" width={1} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Like post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.story}
          source={{
            uri: post.profile_picture,
          }}
        />

        <Text style={{ color: "white", marginLeft: 5, fontWeight: 700 }}>
          {post.user}
        </Text>
      </View>
      <Text style={{ color: "white", fontWeight: 900 }}>...</Text>
    </View>
  );
};
const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        style={{ height: "100%", resizeMode: "cover" }}
        source={{
          uri: post.imageUrl,
        }}
      />
    </View>
  );
};
const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFotterContainer}>
      <Icon
        imgStyle={styles.footerIcon}
        imageUrl={postFootersIcons[0].imageUrl}
      />
      <Icon
        imgStyle={styles.footerIcon}
        imageUrl={postFootersIcons[1].imageUrl}
      />
      <Icon
        imgStyle={styles.footerIcon}
        imageUrl={postFootersIcons[2].imageUrl}
      />
    </View>
    <Icon
      imgStyle={styles.footerIcon}
      imageUrl={postFootersIcons[3].imageUrl}
    />
  </View>
);

const Icon = ({ imgStyle, imageUrl }) => (
  <TouchableOpacity>
    <Image
      style={imgStyle}
      source={{
        uri: imageUrl,
      }}
    />
  </TouchableOpacity>
);
const Like = ({ post }) => {
  return (
    <Text style={{ color: "white", fontWeight: 600 }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  );
};
const Caption = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: 600 }}>{post.user}</Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
};

const CommentsSection = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {post.comments.length > 0 && (
        <Text style={{ color: "gray", fontWeight: 600 }}>
          View {post.comments.length > 1 ? "all" : ""} {post.comments.length}
          {post.comments.length > 1 ? " comments" : " comment"}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => {
  return (
    <>
      {post.comments.map((comment, index) => {
        return (
          <View key={index} style={{ marginTop: 5 }}>
            <Text style={{ color: "white" }}>
              <Text style={{ fontWeight: "600" }}>{comment.user} </Text>
              {comment.comment}
            </Text>
          </View>
        );
      })}
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  story: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  leftFotterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "32%",
  },
});
