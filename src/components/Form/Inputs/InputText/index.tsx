/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextInputProps } from "react-native";
import {
  Container,
  InputTextContainer,
  Error,
  ErrorText,
  InputLabel,
} from "./styles";

interface Props extends TextInputProps {
  value?: string;
  error?: any;
  errorText?: any;
  disabled?: any;
  name?: string;
  label?: string;
  labelColor?: any;
}

export function InputText({
  value,
  name,
  errorText,
  disabled,
  label,
  labelColor,
  ...rest
}: Props) {
  return (
    <>
      <InputLabel labelColor={labelColor}>{label}</InputLabel>
      <Container disabled={disabled}>
        <InputTextContainer
          name={name}
          disabled={disabled}
          value={value}
          {...rest}
        />
        {errorText && (
          <Error>
            <ErrorText>{errorText}</ErrorText>
          </Error>
        )}
      </Container>
    </>
  );
}
