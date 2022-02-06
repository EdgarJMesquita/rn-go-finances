import { useState } from "react";
import { Modal } from "react-native";
import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { categories, Category } from "../../utils/category";
import { CategorySelect } from "../CategorySelect";
import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionTypeButtonContainer,
} from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState<
    "income" | "outcome" | null
  >(null);
  const [category, setCategory] = useState<Category>();
  const [isCategorySelectOpen, setCategorySelectOpen] = useState(false);

  function handleTransactionTypeSelect(type: "income" | "outcome") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypeButtonContainer>
            <TransactionTypeButton
              selected={transactionType === "income"}
              title="Income"
              type="income"
              onPress={() => handleTransactionTypeSelect("income")}
              activeOpacity={1}
            />
            <TransactionTypeButton
              selected={transactionType === "outcome"}
              title="Outcome"
              type="outcome"
              onPress={() => handleTransactionTypeSelect("outcome")}
              activeOpacity={1}
            />
          </TransactionTypeButtonContainer>
          <CategorySelectButton
            title={category?.name || "Categoria..."}
            onPress={() => setCategorySelectOpen(true)}
          />
        </Fields>
        <Button>Enviar</Button>
      </Form>
      <Modal animationType="slide" visible={isCategorySelectOpen}>
        <CategorySelect
          category={category}
          closeSelectCategory={() => setCategorySelectOpen(false)}
          setCategory={setCategory}
        />
      </Modal>
    </Container>
  );
}
