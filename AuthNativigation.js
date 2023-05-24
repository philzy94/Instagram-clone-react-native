import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut } from "./Navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const AuthNativigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
        setCurrentUser(user);
        //console.log(user);
      } else {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, []);
  return <>{currentUser ? <SignedIn /> : <SignedOut />}</>;
};

export default AuthNativigation;

const styles = StyleSheet.create({});
