import React from 'react';
import { Container, Title, ViewInfo, Label, Info } from './styles';
import { Spacer, formatMoney } from '../../utils';

const EnterpriseInfo = (props) => {
  const { enterprise } = props;
  return (
    <Container>
      <ViewInfo>
        <Title>{enterprise.enterprise_name}</Title>
        <Spacer value={10} />

        <Label>Description</Label>
        <Info>{enterprise.description || ' - '}</Info>
        <Spacer value={10} />

        <Label>E-mail</Label>
        <Info>{enterprise.email || ' - '}</Info>
        <Spacer value={10} />

        <Label>Phone</Label>
        <Info>{enterprise.phone || ' - '}</Info>
        <Spacer value={10} />

        <Label>Shares</Label>
        <Info>{enterprise.shares || ' - '}</Info>
        <Spacer value={10} />

        <Label>Shares price</Label>
        <Info>{formatMoney(enterprise.share_price)}</Info>
        <Spacer value={10} />

        <Label>Enterprise type</Label>
        <Info>
          {enterprise.enterprise_type ? enterprise.enterprise_type.enterprise_type_name : ' - '}
        </Info>
        <Spacer value={10} />

        <Label>Location</Label>
        <Info>{enterprise.city + ' - ' + enterprise.country}</Info>
        <Spacer value={10} />
      </ViewInfo>
    </Container>
  );
};

export default EnterpriseInfo;
