import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends TouchableOpacityProps {
  color: string;
  colorText: string;
}

export const Container = styled(TouchableOpacity<ButtonProps>)`
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 11px;
  margin-bottom: 12px;
  flex-direction: row;
`;

export const Title = styled.Text<ButtonProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconContainer = styled.View`
  margin-right: 12px;
`;
