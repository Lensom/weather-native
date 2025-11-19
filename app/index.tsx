import { useEffect, useState } from "react";
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
import { fetchWeather } from "./api/index";
import { Card } from "./components/Card/Card";
import { WeatherResponse } from "./types";
import { saveCityToHistory } from "./utils";
import Layout from "./components/Layout/Layout";

import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HistoryCards } from "./components/HistoryCards/HistoryCards";

const Home = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState("");

  const isButtonDisabled = query.length === 0 || loading;

  const loadHistory = async () => {
    const stored = await AsyncStorage.getItem("history");
    if (stored) setHistory(JSON.parse(stored));
  };

  const getWeather = async () => {
    if (!query.trim()) return;

    try {
      Keyboard.dismiss();
      setLoading(true);
      const data: WeatherResponse = await fetchWeather(query);
      setResult(data);

      await saveCityToHistory(query);
      loadHistory();
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

      setResult(data);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

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

      {result?.current && (
        <Card weather={result} setResult={() => setResult(null)} />
      )}

      {history.length > 0 && (
        <HistoryCards history={history} setHistory={setHistory} />
      )}
    </Layout>
  );
};

export default Home;
