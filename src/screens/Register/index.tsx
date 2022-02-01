import { useState } from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
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
        </Fields>
        <Button>Enviar</Button>
      </Form>
    </Container>
  );
}
