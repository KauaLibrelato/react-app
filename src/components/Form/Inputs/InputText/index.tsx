/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextInputProps } from "react-native";
import { Container, InputTextContainer, Error, ErrorText } from "./styles";

interface Props extends TextInputProps {
  value?: string;
  error?: any;
  errorText?: any;
  disabled?: any;
  name?: string;
}

export function InputText({
  value,
  name,
  errorText,
  disabled,
  ...rest
}: Props) {
  return (
    <Container disabled={disabled}>
      <InputTextContainer
        name={name}
        disabled={disabled}
        value={value}
        {...rest}
      />
      <Error>
        <ErrorText>{errorText}</ErrorText>
      </Error>
    </Container>
  );
}
