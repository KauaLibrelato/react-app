import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  padding: 15px 32px;
`;

export const Informations = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const IconContainerOne = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  padding: 24px 30px;

  position: absolute;
  left: -32px;
  top: -20px;
`;
export const IconContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: flex-end;
  position: absolute;
  padding: 24px 30px;
  left: 317px;
  top: -18px;
`;
