import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Forecast: { city: string };
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
