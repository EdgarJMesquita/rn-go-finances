import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  format,
  isSameWeek,
  isThisMonth,
  isThisWeek,
  isToday,
  isYesterday,
  parseISO,
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { categories } from '../../utils/category';
import { collectionKey } from '../../utils/Constants';
import { formatAmount } from '../../utils/formatAmount';
import { formatToFriendlyDate } from '../../utils/formatToFriendlyDate';
import {
  Amount,
  Category,
  CategoryName,
  Container,
  Date,
  Footer,
  Icon,
  Title,
} from './styles';

export interface DataProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: {
    name: string;
    icon: string;
  };
  date: string;
}

export interface TransactionCardProps {
  data: Transaction;
}

export function TransactionCard({ data }: TransactionCardProps) {
  const category = categories.find(
    (category) => category.key === data.category
  );

  const formattedDate = formatToFriendlyDate(data.date);

  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.transactionType}>
        {data.transactionType === 'outcome' && '- '}

        {formatAmount(data.amount)}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category?.icon} />
          <CategoryName>{category?.name}</CategoryName>
        </Category>
        <Date>{formattedDate}</Date>
      </Footer>
    </Container>
  );
}
