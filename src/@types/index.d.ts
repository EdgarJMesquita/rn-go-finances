type Transaction = {
  id: string | number[];
  name: string;
  amount: string;
  transactionType: 'income' | 'outcome';
  category: string;
  date: string;
};
