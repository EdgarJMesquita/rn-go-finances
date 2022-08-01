import React, { useState } from "react";
import {
  Container,
  Header,
  TittleWrapper,
  Title,
  SignInTitle,
  Footer,
} from "./styles";
import Apple from "../../assets/apple.svg";
import Google from "../../assets/google.svg";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { FooterWrapper } from "../../components/SignInSocialButton/styles";
import { useAuth } from "../../hooks/useAuth";
import { Alert } from "react-native";

export function Login() {
  const { signInWithGoogle } = useAuth();
  const [isLoading, setLoading] = useState(false);

  async function handleSignInWithGoogle() {
    if (isLoading) return;
    try {
      setLoading(true);
      await signInWithGoogle();
      setLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Google");
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TittleWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples
          </Title>
        </TittleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"}
          uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            onPress={handleSignInWithGoogle}
            svg={Google}
            title="Entrar com Google"
            isLoading={isLoading}
          />
          <SignInSocialButton svg={Apple} title="Entrar com Apple" />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
