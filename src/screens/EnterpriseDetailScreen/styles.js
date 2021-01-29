import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const EnterpriseImage = styled.Image`
  height: 300;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 60px;
`;
