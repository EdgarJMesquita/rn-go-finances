import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/theme';
import { Routes } from './src/routes';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [ isFontsReady ] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold
  });

  if(!isFontsReady){
    return (
      <AppLoading />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent/>
      <Routes />
    </ThemeProvider>
  );
}