import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RegistInput from "../elements/RegistInput";

const RegistItems = () => {
  return (
    <View style={styles.grid}>
      <View style={styles.inputGrid}>
        <RegistInput />
        <TouchableOpacity activeOpacity={0.8} style={styles.registButton}>
          <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
      </View>
      
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
  inputGrid: {
    flex: 9,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  registButton : {
      width : 60,
      height : 40,
      backgroundColor : '#2c2c2c',
      justifyContent : "center",
      alignItems : "center",
      borderRadius : 10
  },
  buttonText : {
      color : 'white'
  }
});

export default RegistItems;
