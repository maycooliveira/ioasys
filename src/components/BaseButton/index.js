import React from 'react';
import { ButtonTitle, Container, LoadingAction } from './styles';
import { ActivityIndicator } from 'react-native';
import colors from '../../styles/colors';

const BaseButton = (props) => {
  const { title, onPress, color, loading } = props;
  return (
    <Container onPress={onPress} backgroundColor={color}>
      {loading && <ActivityIndicator color={colors.white} />}
      {!loading && <ButtonTitle>{title.toUpperCase()}</ButtonTitle>}
    </Container>
  );
};

export default BaseButton;
