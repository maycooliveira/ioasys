import React, { useState } from 'react';
import { Container } from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CoreScreen = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  return <Container />;
};

export default CoreScreen;
