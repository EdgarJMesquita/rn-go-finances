import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  Title,
  User,
  UserContainer,
  UserGreeting,
  UserInfo,
  UserName,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { Card } from "../../components/Card";
import { RFPercentage } from "react-native-responsive-fontsize";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/EdgarXongas.png" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Edgar</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserContainer>
      </Header>
      <ScrollView
        style={{ position: "absolute", marginTop: RFPercentage(20) }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Card
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="Última transação em 31 de abril"
          type="up"
        />
        <Card
          title="Saídas"
          amount="R$ 17.000,00"
          lastTransaction="Última transação em sa "
          type="down"
        />
        <Card
          title="Total"
          amount="R$ 17.000,00"
          lastTransaction="Última transação em sa "
          type="total"
        />
      </ScrollView>
    </Container>
  );
}
