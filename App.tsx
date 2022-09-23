import React from "react";
import { ThemeProvider } from "styled-components";
import { Text } from "react-native";
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Alo</Text>
    </ThemeProvider>
  );
}
