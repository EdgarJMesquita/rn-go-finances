import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

const icon = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
};

interface Props extends TouchableOpacityProps {
  type: "income" | "outcome";
  title: string;
  selected?: boolean;
}

export function TransactionTypeButton({
  type,
  title,
  selected,
  ...rest
}: Props) {
  return (
    <Container selected={selected} type={type} {...rest}>
      <Icon type={type} name={icon[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
