import { View, Image, Text } from "react-native";
import styles from "./styles";

const ForecastList = ({ days }) => {
  return (
    <View style={styles.container}>
      {days.map((d) => (
        <View key={d.date} style={styles.card}>
          <Image
            source={{ uri: "https:" + d.day.condition.icon }}
            style={styles.icon}
          />

          <View style={styles.info}>
            <Text style={styles.date}>{d.date}</Text>

            <Text style={styles.temp}>
              {Math.round(d.day.maxtemp_c)}° / {Math.round(d.day.mintemp_c)}°
            </Text>

            <Text style={styles.description}>{d.day.condition.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ForecastList;
