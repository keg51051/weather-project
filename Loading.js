import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Loading() {
    return (
        <LinearGradient
            colors={["#2980B9", "#6DD5FA", "#ffffff"]}
            style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the weather</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
})