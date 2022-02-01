import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface TypeProps {
  type: "income" | "outcome";
}

interface ContainerProps extends TypeProps {
  selected?: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 49%;
  height: 56px;
  border-radius: 5px;
  border: ${({ selected }) => (!selected ? 1.5 : 0)}px solid
    ${({ theme }) => theme.colors.text};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ selected, type, theme }) =>
    selected
      ? type === "income"
        ? theme.colors.successLight
        : theme.colors.attentionLight
      : "transparent"};
`;

export const Icon = styled(Feather).attrs({
  size: 24,
})<TypeProps>`
  color: ${({ type, theme }) =>
    type === "income" ? theme.colors.success : theme.colors.attention};
  margin-right: 14px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
`;
