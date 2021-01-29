import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  ListEnterprise,
  Loading,
  FilterButton,
  EmptyListLabel,
  ContainerIcons,
} from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { enterpriseListRequest } from '../../store/modules/enterprise/actions';
import RowEnterprise from '../../components/RowEnterprise';
import { getUnique, Spacer } from '../../utils';
import colors from '../../styles/colors';

const CoreScreen = () => {
  const data = useSelector((state) => state.enterprises);
  const dispatch = useDispatch();
  const [enterprises, setEnterprises] = useState([]);
  const navigation = useNavigation();
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ContainerIcons>
          {getButton('refresh', 'redo-alt')}
          {getButton('filterScreen', 'filter')}
        </ContainerIcons>
      ),
    });
  }, [navigation, types, getButton]);

  useEffect(() => {
    dispatch(enterpriseListRequest());
  }, []);

  useEffect(() => {
    setEnterprises(data.enterprises);
    if (types.length === 0) {
      console.log('aqui');
      setTypes(
        getUnique(
          data.enterprises.map((item) => {
            return item.enterprise_type;
          }),
        ),
      );
    }
    setLoading(data.loading);
  }, [data.enterprises, data.loading]);

  const renderItem = ({ item }) => (
    <RowEnterprise item={item} onPress={() => callDetail(item.id)} />
  );

  const renderFooter = () => {
    return <Loading color={colors.base} />;
  };

  const callDetail = (id) => {
    navigation.navigate('enterpriseDetail', { id: id });
  };

  const getButton = useCallback(
    (action, icon) => {
      return (
        <FilterButton
          onPress={() => {
            if (action === 'refresh') {
              dispatch(enterpriseListRequest());
              return;
            }
            navigation.navigate(action, { types: types });
          }}>
          <Icon name={icon} size={16} color={colors.slate} />
        </FilterButton>
      );
    },
    [navigation, types, dispatch],
  );

  return (
    <Container>
      {enterprises.length > 0 && !loading && (
        <ListEnterprise
          keyExtractor={(item) => `enterprise${item.id}`}
          data={enterprises}
          renderItem={renderItem}
          ListFooterComponent={loading ? renderFooter : null}
        />
      )}
      {enterprises.length === 0 && !loading && (
        <EmptyListLabel>{'No enterprise\nfound'}</EmptyListLabel>
      )}
    </Container>
  );
};

export default CoreScreen;
