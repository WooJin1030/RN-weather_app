import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#636363", "#a2ab58"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#CAC531", "#F3F9A7"],
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#74ebd5", "#ACB6E5"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#7F7FD5", "#86A8E7"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#8e9eab", "#eef2f3"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#EDE574", "#E1F5C4"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#544a7d", "#ffd452"],
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#544a7d", "#ffd452"],
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#544a7d", "#ffd452"],
  },
  Ash: {
    iconName: "weather-hail",
    gradient: ["#544a7d", "#ffd452"],
  },
  Squall: {
    iconName: "weather-windy-variant",
    gradient: ["#642B73", "#C6426E"],
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color={"white"}
        />
        <Text style={styles.temp}>{temp} °C</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  temp: {
    fontSize: 46,
    color: "white",
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
