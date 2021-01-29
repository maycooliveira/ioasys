import React from 'react';
import { Container, Title, ViewInfo, EnterpriseImage, SubTitle } from './styles';
import APP from '../../configs/app';
import { Spacer } from '../../utils';

const RowEnterprise = ({ item }) => {
  return (
    <Container>
      <ViewInfo>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {item.enterprise_name}
        </Title>
        <Spacer value={4} />
        <SubTitle>{item.city + ' - ' + item.country}</SubTitle>
        <Spacer value={4} />
        <SubTitle>{item.enterprise_type.enterprise_type_name}</SubTitle>
      </ViewInfo>
      <EnterpriseImage source={{ uri: APP.URL_PHOTO_BASE + item.photo }} />
    </Container>
  );
};

export default RowEnterprise;
