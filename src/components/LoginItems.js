import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginButton from "../elements/LoginButton";
import LoginInput from "../elements/LoginInput";

const LoginItems = () => {
  return (
    <View style={styles.grid}>
      <View style={styles.inputGrid}>
        <Text style={styles.titleText}>Tideflo CHAT</Text>
        <LoginInput />
        <LoginButton />
      </View>
      <View style={styles.buttonGrid} />
    </View>
  );
};
const styles = StyleSheet.create({
  grid: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    marginBottom : 60,
    fontSize : 40,
    fontWeight : "bold"
  },
  inputGrid: {
    flex: 9,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonGrid: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
export default LoginItems;
