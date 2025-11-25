import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { fetchWeather } from "@/api/index";
import HistoryCards from "@/components/HistoryCards/HistoryCards";
import Card from "@/components/Card/Card";
import Layout from "@/components/Layout/Layout";
import { WeatherResponse } from "@/types";

import styles from "./styles";

import { useStore } from "@/store";

const Home = () => {
  const { addToHistory, history, setCurrentWeather, currentWeather } =
    useStore();

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const isButtonDisabled = query.length === 0 || loading;

  const getWeather = async () => {
    if (!query.trim()) return;

    try {
      Keyboard.dismiss();
      setLoading(true);
      const data: WeatherResponse = await fetchWeather(query);
      setCurrentWeather(data);

      addToHistory(query);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByLocation = async () => {
    try {
      setError("");
      setLoading(true);

      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      const { coords } = await Location.getLastKnownPositionAsync();
      const { latitude, longitude } = coords;

      const data: WeatherResponse = await fetchWeather(
        `${latitude},${longitude}`
      );

      setCurrentWeather(data);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Text style={styles.title}>🌤 Weather</Text>
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Type city name"
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
          onSubmitEditing={getWeather}
        />
        <TouchableOpacity
          style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
          onPress={getWeather}
          disabled={isButtonDisabled}
        >
          <Ionicons name="search" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.location}>
        <TouchableOpacity
          onPress={getWeatherByLocation}
          style={styles.locationWrapper}
        >
          <Ionicons name="locate" size={18} color="#1976d2" />
          <Text style={styles.locationText}>Get Weather by Location</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#1976d2"
          style={{ marginTop: 20 }}
        />
      )}

      {error && <Text style={styles.error}>{error}</Text>}
      {currentWeather?.current && <Card />}
      {history.length > 0 && <HistoryCards />}
    </Layout>
  );
};

export default Home;
