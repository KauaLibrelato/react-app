import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<{
  error: boolean;
  disabled: boolean;
}>`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray2};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ error }) => (error ? "#FF3333" : "#CCCCCC")};
  background-color: ${({ disabled }) => (disabled ? "#CCCCCC" : "#FFF")};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputTextContainer = styled.TextInput<{
  error: boolean;
  disabled: boolean;
}>`
  padding: 16px;
  width: 85%;
  color: ${({ disabled }) => (disabled ? "#999999" : "#4D4D4D")};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Error = styled.View`
  margin-top: 4px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.danger_2};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-bottom: 8px;
`;

export const ChangeVisibiliyPassword = styled(TouchableOpacity)`
  padding: 10px;
`;

export const IconContainer = styled.View``;
