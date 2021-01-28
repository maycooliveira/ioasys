import React from 'react';
import { ButtonTitle, Container, LoadingAction } from './styles';

const BaseButton = (props) => {
  const { title, onPress, color, loading } = props;
  return (
    <Container onPress={onPress} backgroundColor={color}>
      {loading && <LoadingAction />}
      {!loading && <ButtonTitle>{title.toUpperCase()}</ButtonTitle>}
    </Container>
  );
};

export default BaseButton;
