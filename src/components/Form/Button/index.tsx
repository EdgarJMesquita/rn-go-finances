import React from "react";
import { Container, Title } from "./styles";

interface Props {
  children: string;
  onPress: () => void;
}

export function Button({ children, onPress }: Props) {
  return (
    <Container onPress={onPress} activeOpacity={0.7}>
      <Title>{children}</Title>
    </Container>
  );
}
