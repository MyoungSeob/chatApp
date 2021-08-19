import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RegistInput from "../elements/RegistInput";


const RegistItems = () => {
  return (
    <View style={styles.grid}>
      <View style={styles.inputGrid}>
        <RegistInput /> 
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
});

export default RegistItems;
