import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginButton = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.grid} behavior="padding" enabled>
      <Button
        borderRadius={50}
        activeOpacity={0.8}
        color="#2c2c2c"
        title="로그인 하기"
        onPress={() => alert("hello world")}
      />
      <View style={styles.registArea}>
        <Text>아직 회원이 아니신가요?</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Regist")}
        >
          <Text style={styles.registButton}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  grid: {
    width: "90%",
  },
  loginButton: {
    borderRadius: 100,
  },
  registArea: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  registButton: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
});

export default LoginButton;
