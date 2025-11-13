import { BASE_URL } from "../constants";

export const fetchWeather = async (city: string) => {
  const key = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

  const url = `${BASE_URL}/current.json?q=${city}&key=${key}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
