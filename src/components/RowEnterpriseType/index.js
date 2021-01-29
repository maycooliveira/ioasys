import React from 'react';
import { Container, Title } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../styles/colors';
import { Spacer } from '../../utils';

const RowEnterpriseType = ({ item, onPress }) => {
  return (
    <Container onPress={() => onPress(item)}>
      <Title numberOfLines={1} ellipsizeMode="tail">
        {item.enterprise_type_name}
      </Title>
      <Spacer value={10} />
      {item.selected && <Icon name={'check'} size={14} color={colors.base} />}
    </Container>
  );
};

export default RowEnterpriseType;
