import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(200)}px;
  width: ${RFValue(300)}px;
  background-color: ${({theme})=>theme.colors.shape};
  border-radius: 5px;
  padding: 19px 24px;
  padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`
  height: 30%;
  flex-direction: row;
  align-items: center;
  background: red;
  justify-content: space-between;
`;

export const Title = styled.Text`

`;

export const Icon = styled(Feather)`

`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Amount = styled.Text``;

export const LastTransaction = styled.Text``;
