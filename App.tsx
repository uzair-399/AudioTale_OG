import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { customFonts } from "./src/utils/customFonts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import RootNav from "./src/navigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts(customFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontError && !fontsLoaded) {
    return null; // Return null if fonts are not loaded yet.
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <RootNav />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
