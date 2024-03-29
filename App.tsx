import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/theme";
import { Routes } from "./src/routes";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  let [isFontsReady] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!isFontsReady) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <StatusBar translucent />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
