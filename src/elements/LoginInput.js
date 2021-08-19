import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, Button } from "react-native";
import LoginButton from "./LoginButton";

const LoginInput = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  return (
    <View style={styles.grid}>
      <TextInput
        placeholder="아이디를 입력하세요"
        style={styles.input}
        defaultValue={loginId}
        onChangeText={(text) => setLoginId(text)}
      />
      <View style={styles.gridTwoInput} />
      <TextInput
        placeholder="비밀번호를 입력하세요"
        secureTextEntry={true}
        style={styles.input}
        value={loginPassword}
        onChangeText={(text) => setLoginPassword(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    borderRadius: 50,
    borderStyle: "solid",
    paddingLeft: 25,
    fontSize: 20,
    fontStyle: "normal",
  },
  grid: {
    width: "100%",
    marginBottom : 30,
  },
  gridTwoInput: {
    height: 20,
  },
  girdBetweenButton: {
    height: 20,
  },
});

export default LoginInput;
