import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import LoginItems from "../components/LoginItems";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import ChatList from "./ChatList";

const Login = () => {
  // GoogleSignin.configure({
  //   webClientId:
  //     "127296227080-uocbbv8tvs16ef8it7rlk5hqsj905074.apps.googleusercontent.com",
  // });
  // async function onGoogleButtonPress() {
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }
  
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  if (!user) {
    return (
      <View style={styles.grid}>
        <LoginItems />
        <Button
          title="구글 로그인"
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log("Signed in with Google!")
            )
          }
        />
        <Button
          title="로그아웃"
          onPress={() => {
            auth()
              .signOut()
              .then(() => console.log("User signed out!"));
          }}
        ></Button>
      </View>
    );
  } else {
    return <ChatList />;
  }
};
const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Login;
