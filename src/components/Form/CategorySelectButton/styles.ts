import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  padding: 0 13px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<{ hasValue: boolean }>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, hasValue }) =>
    hasValue ? theme.colors.title : theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
