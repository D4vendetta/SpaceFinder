import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons"; // Import the Feather icons from Expo Vector Icons
import axios from "axios";

const Weather = () => {
  const fixedLatitude = 37.867451381984;
  const fixedLongitude = 127.15612901726;

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "1ef9e1e37ea353ddc51f136d627f5926";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${fixedLatitude}&lon=${fixedLongitude}&appid=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        const celsiusTemperature = kelvinToCelsius(response.data.main.temp);
        setWeatherData({
          ...response.data,
          main: { ...response.data.main, temp: celsiusTemperature },
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    const kelvinToCelsius = (kelvin) => kelvin - 273.15;

    // Fetch weather data using fixed latitude and longitude
    fetchWeatherData();
  }, []); // Empty dependency array to run only once on mount

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case "01d":
        return <Feather name="sun" size={80} color="orange" />;
      case "01n":
        return <Feather name="moon" size={80} color="black" />;
      case "02d":
      case "02n":
        return <Feather name="cloud" size={80} color="gray" />;
      case "03d":
      case "03n":
        return <Feather name="cloud-drizzle" size={80} color="gray" />;
      case "04d":
      case "04n":
        return <Feather name="cloud" size={80} color="gray" />;
      case "09d":
      case "09n":
        return <Feather name="cloud-rain" size={80} color="blue" />;
      case "10d":
      case "10n":
        return <Feather name="cloud-rain" size={80} color="blue" />;
      case "11d":
      case "11n":
        return <Feather name="cloud-lightning" size={80} color="yellow" />;
      case "13d":
      case "13n":
        return <Feather name="cloud-snow" size={80} color="white" />;
      case "50d":
      case "50n":
        return <Feather name="cloud-drizzle" size={80} color="gray" />;
      default:
        return <Feather name="question-mark" size={80} color="black" />;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginTop: -20,
      }}
    >
      {weatherData && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ padding: 5 }}>
            {getWeatherIcon(weatherData.weather[0].icon)}
          </Text>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, marginBottom: 5, fontWeight: "600" }}>
              현재 학교는
            </Text>
            <Text>기온: {weatherData.main.temp.toFixed(2)}°C</Text>
            <Text>기후: {weatherData.weather[0].description}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Weather;
