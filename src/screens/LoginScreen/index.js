import React, { useState } from 'react';
import { Container, Logo, Input, ViewLogin } from './styles';
import logoImage from '../../../images/logo_ioasys.png';
import colors from '../../styles/colors';
import BaseButton from '../../components/BaseButton';
import { checkEmail, checkPasswordLength, showMessage, Spacer } from '../../utils';

const LoginScreen = () => {
  const [formValues, setFormValues] = useState([{ email: '', password: '' }]);
  const [loading, setLoading] = useState(false);

  function handleChangeText(type, value) {
    setFormValues({ ...formValues, [type]: value });
  }

  function doLogin() {
    if (formValues.email?.trim() === '') {
      showMessage('Informe o e-mail');
    } else if (formValues.password?.trim() === '') {
      showMessage('Informe a senha');
    } else if (!checkEmail(formValues.email)) {
      showMessage('Email inválido');
    } else if (!checkPasswordLength(formValues.password)) {
      showMessage('Senha deve conter no mínino 6 caracteres');
    } else {
    }
  }

  return (
    <Container>
      <ViewLogin>
        <Spacer value={50} />
        <Logo source={logoImage} />
        <Input
          value={formValues.email}
          placeholder="E-mail"
          onChangeText={(text) => handleChangeText('email', text)}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          name={formValues.password}
          onChangeText={(text) => handleChangeText('password', text)}
        />
        <Spacer value={50} />
        <BaseButton
          title="Entrar"
          color={colors.base}
          onPress={() => doLogin()}
          loading={loading}
        />
        <Spacer value={50} />
      </ViewLogin>
    </Container>
  );
};

export default LoginScreen;
