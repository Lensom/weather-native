import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchWeather } from "./api/index";
import { Card } from "./components/Card/Card";
import { WeatherResponse } from "./types";

import styles from "./styles";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<WeatherResponse>();
  const [error, setError] = useState("");

  const isButtonDisabled = query.length === 0 || loading;

  const getWeather = async () => {
    if (!query.trim()) return;

    try {
      Keyboard.dismiss();
      setLoading(true);
      const data: WeatherResponse = await fetchWeather(query);
      setResult(data);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByLocation = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.wrapper}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
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
            <TouchableOpacity onPress={getWeatherByLocation}>
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

          {result?.current && <Card weather={result} />}

          <StatusBar style="auto" />
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Home;
