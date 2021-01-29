import React, { useEffect, useState } from 'react';
import { Spacer, showMessage } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Label, ListEnterpriseTypes, Info } from './styles';
import RowEnterpriseType from '../../components/RowEnterpriseType';
import BaseButton from '../../components/BaseButton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import colors from '../../styles/colors';
import { updateList } from '../../store/modules/enterprise/actions';

const FilterScreen = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector((state) => state.enterprises);
  const { types } = props.route.params;
  const [typeList, setTypeList] = useState(types);
  const [query, setQuery] = useState('');
  const [typeSelected, setTypeSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChangeText(value) {
    setQuery(value);
  }

  useEffect(() => {
    setLoading(data.loading);
  }, [data.loading]);

  function setSelectedItem(item) {
    setTypeList(
      typeList.map((itemList) => {
        if (itemList.id === item.id) {
          setTypeSelected(itemList);
          return { ...itemList, selected: true };
        } else {
          return { ...itemList, selected: false };
        }
      }),
    );
  }

  function doFilter() {
    if (!typeSelected) {
      showMessage('Please select a type');
    } else if (query.trim() === '') {
      showMessage('Please inform the Enterprise name');
    } else {
      console.log(typeSelected.id + ' ' + query);
      dispatch(updateList({ type: typeSelected.id, query }));
      navigation.goBack();
    }
  }

  const renderItem = ({ item }) => <RowEnterpriseType item={item} onPress={setSelectedItem} />;

  return (
    <Container>
      <Input
        value={query}
        placeholder="Enterprise name"
        onChangeText={(text) => handleChangeText(text)}
      />
      <Spacer value={26} />
      <Label>Enterprise Types</Label>
      <Spacer value={2} />
      <Info>Select an enterprise type</Info>
      <Spacer value={16} />
      <ListEnterpriseTypes
        keyExtractor={(item) => `types${item.id}`}
        numColumns={2}
        data={typeList}
        renderItem={renderItem}
      />

      <BaseButton title="Filter" color={colors.base} onPress={() => doFilter()} loading={loading} />
    </Container>
  );
};

export default FilterScreen;
