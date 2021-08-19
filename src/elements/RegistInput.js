import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";

const RegistInput = () => {
  const [registId, setRegistId] = useState("");
  const [registPassword, setRegistPassword] = useState("");
  const [registCheckPwd, setRegistCheckPwd] = useState("");

  const onChangeId = (text) => {
    setRegistId(text)
    console.log(text)
  }
  const onChangePassword = (text) => {
    setRegistPassword(text)
  }
  const onChangeCheckPwd = (text) => {
    setRegistCheckPwd(text)
  }
  console.log(String(registId))

  const regist = (registId, registPassword, registCheckPwd) => {
    if(registPassword === registCheckPwd){
      try {
        auth().createUserWithEmailAndPassword(
          SregistId, 
          registPassword
        )
      } catch (error) {
        console.log(error);
      }
    }else{
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
    }
   
  };
  return (
    <KeyboardAvoidingView style={styles.grid} behavior="padding">
      <View>
        <View>
          <View>
            <Text style={styles.text}>E-mail</Text>
          </View>
          <TextInput placeholder="이메일을 입력하세요" style={styles.input} value={registId} onChangeText={onChangeId} />
        </View>
        <View>
          <View>
            <Text style={styles.text}>Password</Text>
          </View>
          <TextInput
            secureTextEntry={true}
            placeholder="비밀번호를 입력하세요"
            style={styles.input}
            value={registPassword} 
            onChangeText={onChangePassword}
          />
        </View>
        <View>
          <View>
            <Text style={styles.text}>Check Password</Text>
          </View>
          <TextInput
            secureTextEntry={true}
            placeholder="비밀번호를 다시 입력하세요"
            style={styles.input}
            value={registCheckPwd} 
            onChangeText={onChangeCheckPwd}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.registButton}
          onPress={regist}
        >
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
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
  registButton: {
    width: 60,
    height: 40,
    backgroundColor: "#2c2c2c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop : 30,
  },
  buttonText: {
    color: "white",
  },
});

export default RegistInput;
