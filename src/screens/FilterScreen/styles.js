import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  flex: 1;
  padding-horizontal: 32px;
  background-color: ${colors.white};
`;

export const Input = styled.TextInput`
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  flex: 1;
  border-color: ${colors.black_60};
  border-width: 1px;
  border-radius: 8px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.base};
`;

export const Info = styled.Text`
  font-size: 11px;
  font-weight: 300;
  color: ${colors.black_60};
`;

export const ListEnterpriseTypes = styled.FlatList`
  padding-horizontal: 10px;
`;
