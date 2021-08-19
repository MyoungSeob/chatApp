import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from "react-native";

const RegistInput = () => {
  const [registId, setRegistId] = useState("");
  const [registPassword, setRegistPassword] = useState("");
  const [registCheckPwd, setRegistCheckPwd] = useState("");
  const [registNickname, setRegistNickname] = useState("");

  return (
    <KeyboardAvoidingView style={styles.grid} behavior="padding">
      <View>
        <View>
          <View>
            <Text style={styles.text}>아이디</Text>
          </View>
          <TextInput placeholder="아이디를 입력하세요" style={styles.input} />
        </View>
        <View>
          <View>
            <Text style={styles.text}>비밀번호</Text>
          </View>
          <TextInput
            secureTextEntry={true}
            placeholder="비밀번호를 입력하세요"
            style={styles.input}
          />
        </View>
        <View>
          <View>
            <Text style={styles.text}>비밀번호 확인</Text>
          </View>
          <TextInput
            secureTextEntry={true}
            placeholder="비밀번호를 다시 입력하세요"
            style={styles.input}
          />
        </View>
        <View>
          <View>
            <Text style={styles.text}>닉네임</Text>
          </View>
          <TextInput placeholder="닉네임을 입력하세요" style={styles.input} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  grid: {
    width: "100%",
    marginBottom: 30,
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
  text: {
    fontSize: 20,
    marginVertical: 7,
  },
});

export default RegistInput;
