import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#063474", "#7185b7"],
        title: "Thunderstorm",
        subtitle: "Please don't go out!"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#cfd9df", "#e2ebf0"],
        title: "Rain",
        subtitle: "Don't forget your umbrella!"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#a1c4fd", "#c2e9fb"],
        title: "Snow",
        subtitle: "Winter, YEY!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#89f7fe", "#66a6ff"],
        title: "Sunny",
        subtitle: "Let's go out!!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Boring"
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>

                <MaterialCommunityIcons size={130} 
                name={weatherOptions[condition].iconName} 
                color="white">
                </MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 56,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 55,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 34
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})
