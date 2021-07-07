import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#636363", "#a2ab58"],
    subTitle: "시원한 음료 한잔?",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#CAC531", "#F3F9A7"],
    subTitle: "번개 조심",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#74ebd5", "#ACB6E5"],
    subTitle: "보슬 보슬 보슬비",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#7F7FD5", "#86A8E7"],
    subTitle: "비도 오고 그래서",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#8e9eab", "#eef2f3"],
    subTitle: "눈눈눈 눈이 오네요",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#EDE574", "#E1F5C4"],
    subTitle: "맑은 하루 좋은 하루",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#2C3E50", "#4CA1AF"],
    subTitle: "우울해지지 말기!",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    subTitle: "운전 조심!",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    subTitle: "운전 조심!",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#544a7d", "#ffd452"],
    subTitle: "마스크 필수!",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    subTitle: "운전 조심!",
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ["#544a7d", "#ffd452"],
    subTitle: "마스크 필수!",
  },
  Ash: {
    iconName: "weather-hail",
    gradient: ["#544a7d", "#ffd452"],
    subTitle: "마스크 필수!",
  },
  Squall: {
    iconName: "weather-windy-variant",
    gradient: ["#642B73", "#C6426E"],
    subTitle: "우산 챙기세요",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#bdc3c7", "#2c3e50"],
    subTitle: "실내에 있을것!",
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
      <View style={styles.halfContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{condition}</Text>
          <Text style={styles.subTitle}>
            {weatherOptions[condition].subTitle}
          </Text>
        </View>
      </View>
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
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontWeight: "300",
    fontSize: 44,
    marginBottom: 10,
  },

  subTitle: {
    fontWeight: "600",
    fontSize: 24,
    color: "white",
  },

  textContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 20,
    marginLeft: 80,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
