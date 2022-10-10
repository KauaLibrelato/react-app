/* eslint-disable camelcase */
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { theme } from "./src/styles/theme";
import { Routes } from "./src/routes";
// import { AuthProvider } from "./src/hooks/AuthProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      {/* <AuthProvider> */}
      <Routes />
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}
