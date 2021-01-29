import React, { useState, useEffect } from 'react';
import { Container, Logo, Input, ViewLogin } from './styles';
import logoImage from '../../../images/logo_ioasys.png';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import BaseButton from '../../components/BaseButton';
import { useDispatch } from 'react-redux';
import { checkEmail, checkPasswordLength, showMessage, Spacer } from '../../utils';
import { userRequest } from '../../store/modules/user/actions';
import { useSelector } from 'react-redux';

const LoginScreen = () => {
  const navigation = useNavigation();
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(data.loading);
    if (data.user !== null) {
      navigation.navigate('coreScreen');
    }
  }, [data.loading, data.user, navigation]);

  function handleChangeText(type, value) {
    setFormValues({ ...formValues, [type]: value });
  }

  function doLogin() {
    if (formValues.email?.trim() === '') {
      showMessage('Informe o E-mail');
    } else if (formValues.password?.trim() === '') {
      showMessage('Informe a Senha');
    } else if (!checkEmail(formValues.email)) {
      showMessage('Email inválido');
    } else if (!checkPasswordLength(formValues.password)) {
      showMessage('Senha deve conter no mínino 6 caracteres');
    } else {
      dispatch(userRequest(formValues));
    }
  }

  return (
    <Container>
      <ViewLogin>
        <Spacer value={30} />
        <Logo source={logoImage} />
        <Input
          value={formValues.email}
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={(text) => handleChangeText('email', text)}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          name={formValues.password}
          onChangeText={(text) => handleChangeText('password', text)}
        />
        <Spacer value={30} />
        <BaseButton title="Enter" color={colors.base} onPress={() => doLogin()} loading={loading} />
        <Spacer value={50} />
      </ViewLogin>
    </Container>
  );
};

export default LoginScreen;
