import { View, Text, Image } from "react-native";
import styles from "./styles";
import { WeatherShort } from "@/types";

const HistoryCard = ({ city, temp, icon, desc }: WeatherShort) => {
  return (
    <View style={styles.card}>
      <Image style={styles.icon} source={{ uri: `https:${icon}` }} />

      <View style={styles.info}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>

      <Text style={styles.temp}>{temp}°C</Text>
    </View>
  );
};

export default HistoryCard;
