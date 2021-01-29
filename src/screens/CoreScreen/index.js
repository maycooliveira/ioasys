import React, { useState, useEffect, useRef } from 'react';
import { Container, ListEnterprise, Loading } from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { enterpriseListRequest } from '../../store/modules/enterprise/actions';
import RowEnterprise from '../../components/RowEnterprise';
import { getUnique } from '../../utils';

const CoreScreen = () => {
  const data = useSelector((state) => state.enterprises);
  const dispatch = useDispatch();
  const [enterprises, setEnterprises] = useState([]);
  const searchRef = useRef(null);
  const [search, setSearch] = useState('');
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

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
