import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import AppWrapper from '../Components/AppWrapper';
import Container from '../Components/Container';
import BarButton from '../Components/BarButton';
import Storage from '../Services/Storage';
import Logo from '../Components/Logo';

export default function FirstScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const token = await Storage.getItem('jwt-token');

      if (token) {
        navigation.navigate('home');
      }
    })();
  }, []);

  return (
    <AppWrapper>
      <Container verticalCenter>
        <Container center>
          <Logo />
        </Container>
        <Container>
          <BarButton
            color='#fff'
            borderColor='#fff'
            title='Criar conta'
            onPress={() => {
              navigation.navigate('signup');
            }}
          />
          <BarButton
            textColor='#fff'
            borderColor='#fff'
            title='Já sou cadastrado'
            onPress={() => {
              navigation.navigate('login');
            }}
          />
        </Container>
      </Container>
    </AppWrapper>
  );
}
