import React, { useCallback, useState } from "react";
import { Alert, FlatList, ScrollView } from "react-native";
import {
  Container,
  Header,
  Icon,
  LogoutButton,
  Photo,
  Title,
  Transactions,
  UserSection,
  UserContainer,
  UserGreeting,
  UserInfo,
  UserName,
} from "./styles";
import { SubTotalCard } from "../../components/SubTotalCard";
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataProps, TransactionCard } from "../../components/TransactionCard";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { collectionKey } from "../../utils/Constants";
import { useFocusEffect } from "@react-navigation/native";
import { formatToFriendlyDate } from "../../utils/formatToFriendlyDate";
import { formatAmount } from "../../utils/formatAmount";
import { Loading } from "../../components/Loading";
import { useAuth } from "../../hooks/useAuth";

export interface DataListProps extends DataProps {
  id: string;
}

const initialValue = {
  income: 0,
  outcome: 0,
  lastIncome: "",
  lastOutcome: "",
  lastTransaction: "",
};

export function Dashboard() {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [overview, setOverview] = useState(initialValue);

  function handleOverview(transactions: Transaction[]) {
    const overview = {
      income: 0,
      outcome: 0,
      lastIncome: "",
      lastOutcome: "",
      lastTransaction: "",
    };

    const _transactions = [...transactions];
    overview.lastIncome = _transactions
      .filter((a) => a.transactionType === "income")
      .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))[0]?.date;

    overview.lastOutcome = _transactions
      .filter((a) => a.transactionType === "outcome")
      .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))[0]?.date;

    overview.lastTransaction = _transactions.sort((a, b) =>
      new Date(a.date) > new Date(b.date) ? -1 : 1
    )[0]?.date;

    transactions.forEach((category) => {
      switch (category.transactionType) {
        case "income":
          overview.income += parseFloat(category.amount);
          overview.lastIncome = category.date;
          break;
        case "outcome":
          overview.outcome += parseFloat(category.amount);
          overview.lastOutcome = category.date;
          break;
        default:
          console.log("TransactionType incorreto.");
          break;
      }
    });

    setOverview(overview);
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const store = await AsyncStorageLib.getItem(collectionKey);
          const data: Transaction[] = store ? JSON.parse(store) : [];
          const sortedData = data.sort((a, b) =>
            new Date(a.date) > new Date(b.date) ? -1 : 1
          );
          setTransactions(sortedData);
          handleOverview(data);
        } catch (error) {
          Alert.alert("Não foi possível carregar as transações.");
        }
      })();
    }, [])
  );

  if (!transactions) return <Loading />;

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{ uri: user?.user.photo || " " }} />
            <UserSection>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user?.user.name}</UserName>
            </UserSection>
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
          amount={formatAmount(overview.income)}
          lastTransaction={formatToFriendlyDate(overview.lastIncome)}
          type="up"
        />
        <SubTotalCard
          title="Saídas"
          amount={formatAmount(overview.outcome)}
          lastTransaction={formatToFriendlyDate(overview.lastOutcome)}
          type="down"
        />
        <SubTotalCard
          title="Total"
          amount={formatAmount(overview.income - overview.outcome)}
          lastTransaction={formatToFriendlyDate(overview.lastTransaction)}
          type="total"
        />
      </ScrollView>
      <Transactions>
        <Title>Listagem</Title>

        <FlatList
          data={transactions}
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
