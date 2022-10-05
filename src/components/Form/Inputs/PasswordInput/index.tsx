/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TextInputProps } from "react-native";

import {
  Container,
  InputTextContainer,
  Error,
  ErrorText,
  ChangeVisibiliyPassword,
  IconContainer,
  InputContainer,
} from "./styles";
import EyeOffSvg from "../../../../assets/eye-off.svg";
import EyeSvg from "../../../../assets/eye.svg";

interface Props extends TextInputProps {
  value?: string;
  errorText?: any;
  error?: any;
  password?: boolean;
  secureTextEntry?: any;
}

export function PasswordInput({
  value,
  errorText,
  error,
  password,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  secureTextEntry,

  ...rest
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <InputContainer error={error}>
        <InputTextContainer
          value={value}
          password={password}
          secureTextEntry={isPasswordVisible}
          {...rest}
        />
        <ChangeVisibiliyPassword
          onPress={() => handlePasswordVisibilityChange()}
        >
          <IconContainer>
            {!isPasswordVisible ? (
              <EyeSvg width={24} height={24} />
            ) : (
              <EyeOffSvg width={24} height={24} />
            )}
          </IconContainer>
        </ChangeVisibiliyPassword>
      </InputContainer>

      <Error>
        <ErrorText>{errorText}</ErrorText>
      </Error>
    </Container>
  );
}
