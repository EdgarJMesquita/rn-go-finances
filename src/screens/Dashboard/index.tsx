import React, { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList, ScrollView } from 'react-native';
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
} from './styles';
import { SubTotalCard } from '../../components/SubTotalCard';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { DataProps, TransactionCard } from '../../components/TransactionCard';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { collectionKey } from '../../utils/Constants';
import { useFocusEffect } from '@react-navigation/native';

export interface DataListProps extends DataProps {
  id: string;
}

const initialValue = {
  income: 0,
  outcome: 0,
  lastIncome: '',
  lastOutcome: '',
};

export function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [overview, setOverview] = useState(initialValue);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const store = await AsyncStorageLib.getItem(collectionKey);
          const data: Transaction[] = store ? JSON.parse(store) : [];
          setTransactions(data);
        } catch (error) {
          console.log(error);
          Alert.alert('Não foi possível carregar as transações.');
        }
      })();
    }, [])
  );

  useEffect(() => {
    if (!transactions) return;
    if (transactions.length === 0) return;

    const overview = {
      income: 0,
      outcome: 0,
      lastIncome: '',
      lastOutcome: '',
    };

    transactions.forEach((category) => {
      switch (category.transactionType) {
        case 'income':
          overview.income += parseFloat(category.amount);
          overview.lastIncome = category.date;
          break;
        case 'outcome':
          overview.outcome += parseFloat(category.amount);
          overview.lastOutcome = category.date;
          break;
        default:
          console.log('TransactionType incorreto.');
          break;
      }
    });

    setOverview(overview);
  }, [transactions]);

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/EdgarXongas.png' }} />
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
        style={{ position: 'absolute', marginTop: RFPercentage(20) }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <SubTotalCard
          title="Entradas"
          amount={`R$ ${overview.income}`}
          lastTransaction="Última transação em 31 de abril"
          type="up"
        />
        <SubTotalCard
          title="Saídas"
          amount={`R$ ${overview.outcome}`}
          lastTransaction="Última transação em sa "
          type="down"
        />
        <SubTotalCard
          title="Total"
          amount={`R$ ${overview.income - overview.outcome}`}
          lastTransaction="Última transação em sa "
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
