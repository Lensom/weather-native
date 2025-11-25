import { Text, View } from "react-native";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
import { fetchForecast } from "@/api";
import ForecastList from "@/components/ForecastList/ForecastList";
import { useAppNavigation } from "@/hooks";
import styles from "./styles";

const Forecast = ({ route }) => {
  const [days, setDays] = useState([]);
  const [country, setCountry] = useState("");
  const { city } = route.params;
  const navigation = useAppNavigation();

  const getForecast = async () => {
    if (!city) return;

    try {
      const data = await fetchForecast(city);
      setDays(data.forecast.forecastday);
      setCountry(data.location.country);
    } catch (e) {
      console.log("Forecast error:", e);
    }
  };

  useEffect(() => {
    getForecast();
  }, [city]);

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>
          Forecast for {city}, {country}
        </Text>
      </View>

      <ForecastList days={days} />
      <Text style={styles.back} onPress={() => navigation.goBack()}>
        Go to Home
      </Text>
    </Layout>
  );
};

export default Forecast;
