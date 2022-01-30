import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput.attrs({})`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.shape};

  height: ${RFValue(56)}px;
  padding: 18px 16px 15px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;
