import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { InputForm } from '../../components/Form/InputForm';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Category } from '../../utils/category';
import { CategorySelect } from '../CategorySelect';
import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionTypeButtonContainer,
} from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenProps } from '../../routes/types';
import uuid from 'react-native-uuid';

interface FormData {
  name: string;
  amount: string;
}

const Scheme = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
});

export function Register({ navigation }: ScreenProps) {
  const collectionKey = '@gofinances:transactions';
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Scheme),
  });
  const [transactionType, setTransactionType] = useState<
    'income' | 'outcome' | null
  >(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [isCategorySelectOpen, setCategorySelectOpen] = useState(false);

  function handleTransactionTypeSelect(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) return Alert.alert('Selecione o tipo de transação');
    if (!category?.key) return Alert.alert('Selecione a categoria');

    const newTransaction: Transaction = {
      id: uuid.v4().toString(),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category?.key,
      date: new Date().toISOString(),
    };

    try {
      const store = await AsyncStorage.getItem(collectionKey);
      const data = store ? JSON.parse(store) : [];
      const updatedTransactions = [...data, newTransaction];
      await AsyncStorage.setItem(
        collectionKey,
        JSON.stringify(updatedTransactions)
      );
      setCategory(null);
      reset();
      setTransactionType(null);
      Alert.alert('Sucesso', 'Transação cadastrada com sucesso.');
      navigation.jumpTo('Dashboard');
    } catch (error) {
      Alert.alert('Não foi possível salvar');
    }
  }

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, width: '100%' }}
      onPress={Keyboard.dismiss}
    >
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              placeholder="Nome"
              control={control}
              autoCapitalize="sentences"
              name="name"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="number-pad"
              error={errors.amount && errors.amount.message}
            />
            <TransactionTypeButtonContainer>
              <TransactionTypeButton
                selected={transactionType === 'income'}
                title="Income"
                type="income"
                onPress={() => handleTransactionTypeSelect('income')}
                activeOpacity={1}
              />
              <TransactionTypeButton
                selected={transactionType === 'outcome'}
                title="Outcome"
                type="outcome"
                onPress={() => handleTransactionTypeSelect('outcome')}
                activeOpacity={1}
              />
            </TransactionTypeButtonContainer>
            <CategorySelectButton
              title={category?.name || 'Categoria...'}
              onPress={() => setCategorySelectOpen(true)}
              hasValue={!!category}
            />
          </Fields>
          <Button onPress={handleSubmit(handleRegister)}>Enviar</Button>
        </Form>
        <Modal animationType="slide" visible={isCategorySelectOpen}>
          <CategorySelect
            category={category}
            closeSelectCategory={() => setCategorySelectOpen(false)}
            setCategory={setCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
