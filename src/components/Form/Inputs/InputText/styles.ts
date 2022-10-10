/* eslint-disable @typescript-eslint/no-explicit-any */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const InputTextContainer = styled.TextInput<{
  error: boolean;
  disabled: boolean;
  isFocused?: boolean;
}>`
  width: 100%;
  padding: 16px;
  color: ${({ theme }) => theme.colors.gray2};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ error }) => (error ? "#FF3333" : "#CCCCCC")};
  background-color: ${({ disabled }) => (disabled ? "#F2F2F2" : "#FFF")};
  color: ${({ disabled, error }) =>
    // eslint-disable-next-line no-nested-ternary
    disabled ? "#999999" : error === true ? "#FF3333" : "#191919"};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Error = styled.View`
  margin-top: 4px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.danger_2};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const InputLabel = styled.Text<{ labelColor: any }>`
  margin-top: 8px;
  color: ${({ theme, labelColor }) => labelColor ?? theme.colors.gray1};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-bottom: 4px;
`;
