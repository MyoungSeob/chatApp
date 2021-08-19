import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RegistItems from "../components/RegistItems";

const Regist = () => {

    return (
        <View style={styles.grid}>
            <RegistItems />
        </View>
    )
}
const styles = StyleSheet.create({
    grid : {
        width : '100%',
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})
export default Regist;