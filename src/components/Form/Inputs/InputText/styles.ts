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
  padding: 12px;
  color: ${({ theme }) => theme.colors.gray2};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ error }) => (error ? "#FF3333" : "#CCCCCC")};
  background-color: ${({ disabled }) => (disabled ? "#F2F2F2" : "#FFF")};
  color: ${({ disabled }) => (disabled ? "#999999" : "#4D4D4D")};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Error = styled.View`
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.danger_2};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
