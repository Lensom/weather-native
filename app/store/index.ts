import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

import { State, Actions } from "../types";

export const useStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      // state
      history: [],
      currentWeather: null,
      // actions
      addToHistory: (city: string | []) => {
        if (Array.isArray(city)) {
          set({ history: [] });
          return;
        }

        const list = get().history;

        if (!list.includes(city)) {
          set({ history: [city, ...list].slice(0, 10) });
        }
      },
      clearHistory: () => set({ history: [] }),
      setCurrentWeather: (data) => set({ currentWeather: data }),
    }),
    {
      name: "weather-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
