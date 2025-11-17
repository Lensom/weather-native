import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveCityToHistory = async (city: string) => {
  try {
    const stored = await AsyncStorage.getItem("history");
    const history = stored ? JSON.parse(stored) : [];

    const updated = [city, ...history.filter((c: string) => c !== city)];

    await AsyncStorage.setItem("history", JSON.stringify(updated.slice(0, 5)));
  } catch (e) {
    console.log("Failed to store city", e);
  }
};

export const clearLastWeather = async () => {
  await AsyncStorage.removeItem("history");
};
