import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ListEnterprise = styled.FlatList`
  padding-horizontal: 20px;
`;
