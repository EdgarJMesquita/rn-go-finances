import React from "react";
import { FlatList, ScrollView } from "react-native";
import {
  Container,
  Header,
  Icon,
  LogoutButton,
  Photo,
  Title,
  Transactions,
  User,
  UserContainer,
  UserGreeting,
  UserInfo,
  UserName,
} from "./styles";
import { SubTotalCard } from "../../components/SubTotalCard";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  DataProps,
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

export interface DataListProps extends DataProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Aplicativo de vendas",
      amount: "R$ 10.000,00",
      category: { icon: "dollar-sign", name: "Vendas" },
      date: "12/07/1997",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: { icon: "coffee", name: "Alimentação" },
      date: "10/07/1997",
    },
    {
      id: "3",
      type: "positive",
      title: "Aplicativo de vendas",
      amount: "R$ 10.000,00",
      category: { icon: "shopping-bag", name: "Vendas" },
      date: "12/07/1997",
    },
  ];

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
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserContainer>
      </Header>
      <ScrollView
        style={{ position: "absolute", marginTop: RFPercentage(20) }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <SubTotalCard
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="Última transação em 31 de abril"
          type="up"
        />
        <SubTotalCard
          title="Saídas"
          amount="R$ 17.000,00"
          lastTransaction="Última transação em sa "
          type="down"
        />
        <SubTotalCard
          title="Total"
          amount="R$ 17.000,00"
          lastTransaction="Última transação em sa "
          type="total"
        />
      </ScrollView>
      <Transactions>
        <Title>Listagem</Title>

        <FlatList
          data={data}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        />
      </Transactions>
    </Container>
  );
}
