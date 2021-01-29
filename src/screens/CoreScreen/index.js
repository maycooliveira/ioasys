import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  ListEnterprise,
  Loading,
  FilterButton,
  EmptyListLabel,
  ContainerIcons,
  ContainerLeftIcon,
} from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { enterpriseListRequest } from '../../store/modules/enterprise/actions';
import RowEnterprise from '../../components/RowEnterprise';
import { getUnique } from '../../utils';
import colors from '../../styles/colors';
import { userLogout } from '../../store/modules/user/actions';

const CoreScreen = () => {
  const data = useSelector((state) => state.enterprises);
  const dispatch = useDispatch();
  const [enterprises, setEnterprises] = useState([]);
  const navigation = useNavigation();
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <ContainerLeftIcon>{getButton('exit', 'sign-out-alt')}</ContainerLeftIcon>,
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
  }, [dispatch]);

  useEffect(() => {
    setLoading(data.loading);
    setEnterprises(data.enterprises);
    if (types.length === 0) {
      setTypes(
        getUnique(
          data.enterprises.map((item) => {
            return item.enterprise_type;
          }),
        ),
      );
    }
  }, [data.enterprises, data.loading]);

  const renderItem = ({ item }) => (
    <RowEnterprise item={item} onPress={() => callDetail(item.id)} />
  );

  const callDetail = (id) => {
    navigation.navigate('enterpriseDetail', { id: id });
  };

  const getButton = useCallback(
    (action, icon) => {
      return (
        <FilterButton
          onPress={async () => {
            if (action === 'refresh') {
              dispatch(enterpriseListRequest());
              return;
            }
            if (action === 'exit') {
              await dispatch(userLogout());
              AsyncStorage.removeItem('token');
              navigation.goBack();
            }
            navigation.navigate(action, { types: types });
          }}>
          <Icon name={icon} size={16} color={colors.slate} />
        </FilterButton>
      );
    },
    [navigation, types, dispatch],
  );

  if (loading) {
    return <Loading color={colors.base} />;
  }

  return (
    <Container>
      {enterprises.length === 0 && !loading && (
        <EmptyListLabel>{'No enterprise\nfound'}</EmptyListLabel>
      )}
      <ListEnterprise
        keyExtractor={(item) => `enterprise${item.id}`}
        data={enterprises}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default CoreScreen;
