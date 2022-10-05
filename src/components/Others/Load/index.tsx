import React from "react";

import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

export function Load() {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator size="small" color={theme.colors.primary} />
    </Container>
  );
}
