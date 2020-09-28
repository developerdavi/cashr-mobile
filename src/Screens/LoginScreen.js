import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AppWrapper from '../Components/AppWrapper';
import Container from '../Components/Container';
import BackButton from '../Components/BackButton';
import Title from '../Components/Title';
import TextInput from '../Components/TextInput';
import SubmitButton from '../Components/SubmitButton';
import api from '../Services/Api';
import Storage from '../Services/Storage';
import Alert from '../Helpers/Alert';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (value) => {
    const x = { ...formValue };
    x[field] = value;
    setFormValue(x);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await api.post('/users/login', formValue);

      await Storage.setItem('jwt-token', data.token);

      navigation.navigate('home');
    } catch (error) {
      Alert('Dados incorretos');
    }
    setLoading(false);
  };

  return (
    <AppWrapper>
      <Container marginTop={24}>
        <BackButton />
      </Container>
      <Container marginTop={24}>
        <Title>Bem vindo{'\n'}de volta</Title>
      </Container>
      <Container marginTop={24}>
        <TextInput placeholder='E-mail' type='emailAddress' keyboardType='email-address' value={formValue.email} onChange={handleChange('email')} />
        <TextInput placeholder='Senha' password value={formValue.password} onChange={handleChange('password')} />
      </Container>
      <Container
        marginTop={24}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Title>Entrar</Title>
        <SubmitButton loading={loading} onPress={handleSubmit} />
      </Container>
    </AppWrapper>
  );
}
