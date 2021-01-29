import React, { useState, useEffect, useRef } from 'react';
import { Container, ListEnterprise, Loading, FilterButton } from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { enterpriseListRequest } from '../../store/modules/enterprise/actions';
import RowEnterprise from '../../components/RowEnterprise';
import { getUnique } from '../../utils';
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
        <FilterButton onPress={() => {}}>
          <Icon name={'filter'} size={20} color={colors.base} />
        </FilterButton>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(enterpriseListRequest());
  }, []);

  useEffect(() => {
    setEnterprises(data.enterprises);
    setTypes(
      getUnique(
        data.enterprises.map((item) => {
          return item.enterprise_type;
        }),
      ),
    );
    setLoading(data.loading);
  }, [data.enterprises, data.loading]);

  const renderItem = ({ item }) => <RowEnterprise item={item} />;

  const renderFooter = () => {
    return <Loading />;
  };

  return (
    <Container>
      <ListEnterprise
        keyExtractor={(item) => `enterprise${item.id}`}
        data={enterprises}
        renderItem={renderItem}
        ListFooterComponent={loading ? renderFooter : null}
      />
    </Container>
  );
};

export default CoreScreen;
