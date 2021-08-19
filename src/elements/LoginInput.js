import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";

const LoginInput = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigation = useNavigation();

  const login = (loginId, loginPassword) => {
    const mail = loginId.toString()
    auth()
      .signInWithEmailAndPassword(mail, `${loginPassword}`)
      .then(() => {
        console.log("됐다");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };
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
      <View style={styles.buttonGrid}>
        <Button
          borderRadius={50}
          activeOpacity={0.8}
          color="#2c2c2c"
          title="로그인 하기"
          onPress={login}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGrid: {
    width: "90%",
    justifyContent: "center",
    marginTop: 40,
  },
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
    marginBottom: 30,
  },
  gridTwoInput: {
    height: 20,
  },
  girdBetweenButton: {
    height: 20,
  },
});

export default LoginInput;
