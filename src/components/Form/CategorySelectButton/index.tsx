import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function CategorySelectButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
