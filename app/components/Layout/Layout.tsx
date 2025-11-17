import { ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.wrapper} keyboardShouldPersistTaps="handled">
          {children}
          <StatusBar style="auto" />
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Layout;
