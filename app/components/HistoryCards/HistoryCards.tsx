import { Button, View } from "react-native";
import HistoryCard from "./HistoryCard";
import { useEffect, useState } from "react";
import { WeatherShort } from "@/types";
import { fetchWeather } from "@/api";
import { useStore } from "@/store";

const HistoryCards = () => {
  const { history, clearHistory } = useStore();
  const [lastWeather, setLastWeather] = useState<WeatherShort[]>([]);

  const handleClearHistory = async () => {
    clearHistory();
    setLastWeather([]);
  };

  useEffect(() => {
    const load = async () => {
      const arr: WeatherShort[] = [];

      for (const city of history) {
        const data = await fetchWeather(city);

        if (!data.current) return;

        arr.push({
          city,
          temp: data.current.temp_c,
          icon: data.current.condition.icon,
          desc: data.current.condition.text,
        });
      }

      setLastWeather(arr);
    };

    load();
  }, [history]);

  return (
    <View>
      {lastWeather.length > 0 &&
        lastWeather.map((item) => (
          <HistoryCard
            key={item.city}
            city={item.city}
            temp={item.temp}
            icon={item.icon}
            desc={item.desc}
          />
        ))}

      {history.length > 0 && (
        <Button title="Clear History" onPress={handleClearHistory} />
      )}
    </View>
  );
};

export default HistoryCards;
