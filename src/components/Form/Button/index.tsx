import React from "react";
import { TouchableOpacityProps, View } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  children: string;
}

export function Button({ children, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
}
