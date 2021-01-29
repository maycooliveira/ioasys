import APP from '../configs/app';
import React from 'react';
import { Alert, View } from 'react-native';

const showMessage = (msg) => {
  Alert.alert(APP.NAME, msg);
};

function checkEmail(value) {
  const reg = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
  return reg.test(value);
}

function checkPasswordLength(value) {
  return value.length >= 6;
}

const Spacer = ({ value = 20 }) => {
  return <View style={{ width: value, height: value }} />;
};

const getUnique = (dataTypes) => {
  const arrayUnique = [];
  dataTypes.map((itemType) => {
    if (!arrayUnique.some((item) => item.id === itemType.id)) {
      arrayUnique.push(itemType);
    }
  });
  return arrayUnique.sort((a, b) => {
    return a.enterprise_type_name.localeCompare(b.enterprise_type_name);
  });
};

const formatMoney = (n) => {
  if (n == null || n === 0) {
    return 'R$0,00';
  }
  return `£ ${n
    .toFixed(2)

    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`;
};

export { showMessage, checkEmail, checkPasswordLength, Spacer, getUnique, formatMoney };
