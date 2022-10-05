import React from "react";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  colorText?: string;
  onPress?: () => void;
}

export function NoFillButton({
  title,
  disabled = false,
  loading = false,
  color,
  colorText,
  onPress,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      onPress={onPress}
      activeOpacity={0.8}
      color={color || theme.colors.primary}
      disabled={disabled}
      style={{ opacity: disabled === false || loading === true ? 1 : 0.5 }}
    >
      <Title colorText={colorText}>{title}</Title>
    </Container>
  );
}
