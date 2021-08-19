import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import LoginItems from "../components/LoginItems";

const Login = () => {
  return (
    <View style={styles.grid}>
      <LoginItems />
    </View>
  );
};
const styles = StyleSheet.create({
    grid : {
        flex : 1,
        justifyContent : "center",
        alignItems : 'center'
    }
})
export default Login;
