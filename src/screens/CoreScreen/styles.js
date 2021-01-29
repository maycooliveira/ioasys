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

export const FilterButton = styled.TouchableOpacity`
  margin-right: 10;
  padding: 6px;
`;

export const EmptyListLabel = styled.Text`
  font-size: 20;
  font-weight: 600;
  color: ${colors.gray_40};
  text-align: center;
  margin-top: 40px;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
`;
