import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  format,
  isSameWeek,
  isThisMonth,
  isThisWeek,
  isToday,
  parseISO,
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { categories } from '../../utils/category';
import { collectionKey } from '../../utils/Constants';
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

  const date = parseISO(data.date);
  const today = `'Hoje às' HH:mm`;
  const thisWeek = `EEEE 'às' HH:mm`;
  const thisMonth = `'dia' dd 'às' HH:mm`;
  const completeDate = `dd/MM/yyyy 'às' HH:mm`;
  const formatSchema = isToday(date)
    ? today
    : isThisWeek(date)
    ? thisWeek
    : isThisMonth(date)
    ? thisMonth
    : completeDate;

  const formattedDate = format(date, formatSchema, { locale: ptBR });

  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.transactionType}>
        {data.transactionType === 'outcome' && '- '}
        {'R$ '}
        {data.amount}
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
