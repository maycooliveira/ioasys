import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.white};
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.slate};
`;
