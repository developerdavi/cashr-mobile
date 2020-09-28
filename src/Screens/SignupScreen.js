import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AppWrapper from '../Components/AppWrapper';
import Container from '../Components/Container';
import BackButton from '../Components/BackButton';
import Title from '../Components/Title';
import TextInput from '../Components/TextInput';
import SubmitButton from '../Components/SubmitButton';
import api from '../Services/Api';
import Alert from '../Helpers/Alert';

export default function SignupScreen() {
  const navigation = useNavigation();

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (value) => {
    const x = { ...formValue };
    x[field] = value;
    setFormValue(x);
  };

  const handleSubmit = async () => {
    if (formValue.password !== formValue.repeatPassword) {
      Alert('As senhas não conferem');
      return;
    }

    setLoading(true);
    try {
      await api.post('/users/create', {
        name: formValue.name,
        email: formValue.email,
        password: formValue.password
      });

      navigation.navigate('login');
    } catch (error) {
      Alert(error.response.data.error || error.message);
    }
    setLoading(false);
  };

  return (
    <AppWrapper>
      <Container marginTop={24}>
        <BackButton />
      </Container>
      <Container marginTop={24}>
        <Title>Criar{'\n'}conta</Title>
      </Container>
      <Container marginTop={24}>
        <TextInput placeholder='Nome completo' value={formValue.name} onChange={handleChange('name')} />
        <TextInput placeholder='E-mail' type='emailAddress' value={formValue.email} onChange={handleChange('email')} />
        <TextInput placeholder='Senha' password value={formValue.password} onChange={handleChange('password')} />
        <TextInput placeholder='Repita sua senha' password value={formValue.repeatPassword} onChange={handleChange('repeatPassword')} />
      </Container>
      <Container
        marginTop={24}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Title>Cadastrar</Title>
        <SubmitButton loading={loading} onPress={handleSubmit} />
      </Container>
    </AppWrapper>
  );
}
