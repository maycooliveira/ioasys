import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.white};
  flex: 1;
`;

export const ButtonTitle = styled.Text`
  font-size: 14;
  letter-spacing: 4px;
  font-weight: 600;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 20;
  font-weight: 600;
  color: ${colors.slate};
`;

export const ViewInfo = styled.View`
  padding: 16px;
`;

export const Label = styled.Text`
  font-size: 11;
  color: ${colors.base};
  font-weight: 300;
`;

export const Info = styled.Text`
  font-size: 12;
  margin-top: 4px;
  color: ${colors.black_60};
  font-weight: 400;
`;
