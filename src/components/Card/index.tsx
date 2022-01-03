import React from 'react';
import { View } from 'react-native';
import { Amount, Container, Content, Header, Icon, LastTransaction, Title } from './styles';

export function Card(){
  return (
    <Container>
      <Header>
        <Title>
          Entradas
        </Title>
        <Icon name="arrow-up-circle"/>
      </Header>
      <Content>
        <Amount>
          $17.000,00
        </Amount>
        <LastTransaction>
          Última entrada dia 13 de abril
        </LastTransaction>
      </Content>
    </Container>
  );
}