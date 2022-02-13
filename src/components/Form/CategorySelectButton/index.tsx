import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  hasValue: boolean;
}

export function CategorySelectButton({ title, hasValue, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title hasValue={hasValue}>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
