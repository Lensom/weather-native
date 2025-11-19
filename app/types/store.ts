import { WeatherResponse } from "./weather";

export type State = {
  history: string[];
  currentWeather: WeatherResponse | null;
};

export type Actions = {
  addToHistory: (city: string) => void;
  clearHistory: () => void;
  setCurrentWeather: (data: WeatherResponse) => void;
};
