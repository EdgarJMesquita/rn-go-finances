import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, Header, Icon, Photo, Title, User, UserContainer, UserGreeting, UserInfo, UserName } from './styles';
import { Feather } from '@expo/vector-icons';
import { Card } from '../../components/Card';

export function Dashboard(){
  return (
    <Container>
      <Header>
       
        <UserContainer>
          
          <UserInfo>
            <Photo 
              source={{uri: 'https://github.com/EdgarXongas.png'}}
              />
            <User>
              <UserGreeting>
                Olá,
              </UserGreeting>
              <UserName>
                Edgar
              </UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserContainer>
      </Header>
      <ScrollView style={{marginTop: -150}} contentContainerStyle={{height: 300}}>
        <Card/>
          
      </ScrollView>
    </Container>
  );
}