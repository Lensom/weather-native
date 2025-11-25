import { View, Text, Image, TouchableHighlight } from "react-native";

import styles from "./styles";

import { useStore } from "@/store";
import { useAppNavigation } from "@/hooks";

const Card = () => {
  const { currentWeather, setCurrentWeather } = useStore();
  const { location, current } = currentWeather;
  const navigation = useAppNavigation();

  const localTime = location.localtime.split(" ")[1];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TouchableHighlight
          onPress={() => setCurrentWeather(null)}
          style={styles.deleteButton}
        >
          <Text style={styles.closeIcon}>⛌</Text>
        </TouchableHighlight>
        <View>
          <Text style={styles.city}>
            {location.name}, {location.country}
          </Text>
          <Text style={styles.time}>Local Time: {localTime}</Text>
        </View>
        <Image
          source={{ uri: "https:" + current.condition.icon }}
          style={styles.icon}
        />
      </View>

      <Text style={styles.temp}>{current.temp_c}°C</Text>
      <Text style={styles.feels}>Feels like {current.feelslike_c}°C</Text>
      <Text style={styles.condition}>{current.condition.text}</Text>

      <View style={styles.infoGrid}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>💨 Wind</Text>
          <Text style={styles.value}>
            {current.wind_kph} km/h ({current.wind_dir})
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>💧 Humidity</Text>
          <Text style={styles.value}>{current.humidity}%</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>🌡️ Pressure</Text>
          <Text style={styles.value}>{current.pressure_mb} mb</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>☁️ Cloudiness</Text>
          <Text style={styles.value}>{current.cloud}%</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>🔆 UV Index</Text>
          <Text style={styles.value}>{current.uv}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>👁️ Visibility</Text>
          <Text style={styles.value}>{current.vis_km} км</Text>
        </View>
      </View>
      <Text
        onPress={() => navigation.navigate("Forecast", { city: location.name })}
        style={styles.get}
      >
        Get forecast for {location.name}
      </Text>

      <Text style={styles.updated}>Updated: {current.last_updated}</Text>
    </View>
  );
};

export default Card;
