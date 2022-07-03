import AsyncStorageLib from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { HistoryCard } from '../../components/HistoryCard';
import { categories } from '../../utils/category';
import { collectionKey } from '../../utils/Constants';
import { formatAmount } from '../../utils/formatAmount';
import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
} from './styles';
import { VictoryPie } from 'victory-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/theme';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

interface Overall {
  name: string;
  total: number;
  color: string;
  percent: string;
}

export function Resume() {
  const [overall, setOverall] = useState<Overall[] | null>(null);
  const bottomTabBarHeight = useBottomTabBarHeight();

  async function loadData() {
    try {
      const store = await AsyncStorageLib.getItem(collectionKey);
      const data: Transaction[] = store ? JSON.parse(store) : [];
      const expensive = data.filter(
        (transaction) => transaction.transactionType === 'outcome'
      );

      const totalExpenses = expensive.reduce(
        (acc: number, expensive) => acc + Number(expensive.amount),
        0
      );

      const overall: Overall[] = [];

      categories.forEach((category) => {
        let categorySum = 0;
        expensive.forEach((expensive) => {
          if (expensive.category === category.key) {
            categorySum += parseFloat(expensive.amount);
          }
        });
        if (categorySum > 0) {
          overall.push({
            name: category.name,
            total: categorySum,
            color: category.color,
            percent: `${((categorySum * 100) / totalExpenses).toFixed(0)}%`,
          });
        }
      });
      setOverall(overall);
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível carregar as categorias.');
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const pieData = overall?.map((category) => ({
    x: category.percent,
    y: category.total,
  }));

  const colorScale = overall?.map((category) => category.color);

  return (
    <Container>
      <Header>
        <Title>Resumo por categorias</Title>
      </Header>
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: bottomTabBarHeight,
        }}
      >
        <MonthSelect>
          <MonthSelectButton>
            <MonthSelectIcon />
          </MonthSelectButton>
          <MonthSelectButton>
            <MonthSelectIcon />
          </MonthSelectButton>
        </MonthSelect>

        <ChartContainer>
          <VictoryPie
            data={pieData}
            colorScale={colorScale}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: 'bold',
                fill: theme.colors.shape,
              },
            }}
            labelRadius={50}
          />
        </ChartContainer>
        {overall?.map((category, index) => (
          <HistoryCard
            key={index}
            title={category.name}
            amount={formatAmount(category.total)}
            color={category.color}
          />
        ))}
      </Content>
    </Container>
  );
}
