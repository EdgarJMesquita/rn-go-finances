import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

export const Fields = styled.View`
  width: 100%;
`;

export const TransactionTypeButtonContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 8px;
`;
