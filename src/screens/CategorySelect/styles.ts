import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Platform } from "react-native";

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const CategoryCard = styled.TouchableOpacity.attrs({
  activityOpacity: 1,
})<ButtonProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondaryLight : theme.colors.background};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  padding-top: ${Platform.OS === "android" ? 3 : 0}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  align-items: center;
  padding: 18px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;
