import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  flex: 1;
  margin-horizontal: 32px;
`;

export const ViewLogin = styled.View`
  flex: 1;
  align-self: center;
`;

export const Logo = styled.Image`
  margin-top: 60px;
`;

export const Input = styled.TextInput`
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  flex: 1%;
  border-color: ${colors.gray_70};
  border-width: 1px;
  border-radius: 8px;
`;
