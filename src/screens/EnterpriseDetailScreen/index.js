import React, { useEffect, useState } from 'react';
import { Container, EnterpriseImage, Loading } from './styles';
import api from '../../services/api';
import { showMessage } from '../../utils';
import APP from '../../configs/app';
import EnterpriseInfo from '../../components/EnterpriseInfo';
import colors from '../../styles/colors';

const EnterpriseDetailScreen = (props) => {
  const { id } = props.route.params;
  const [enterprise, setEnterprise] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEnterprise(id);
  }, [id]);

  async function getEnterprise(id) {
    setLoading(true);
    try {
      const response = await api.instance().get('enterprises/' + id);
      setEnterprise(response.data.enterprise);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showMessage(error.message || 'Erro desconhecido');
    }
  }

  if (loading) {
    return <Loading size="large" color={colors.base} />;
  }

  return (
    <Container showsVerticalScrollIndicator={false} bounces={false}>
      <EnterpriseImage source={{ uri: APP.URL_PHOTO_BASE + enterprise.photo }} />
      <EnterpriseInfo enterprise={enterprise} />
    </Container>
  );
};

export default EnterpriseDetailScreen;
