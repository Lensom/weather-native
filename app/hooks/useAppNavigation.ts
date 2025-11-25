import { RootNavigationProp } from "../types";

import { useNavigation } from "@react-navigation/native";

export function useAppNavigation() {
  return useNavigation<RootNavigationProp>();
}
