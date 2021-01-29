import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.white};
  margin-top: 16px;
  border-radius: 8px;
`;

export const ViewInfo = styled.View`
  margin-left: 40px;
  height: 80px;
  background-color: #eceff1;
  padding: 10px 10px 10px 42px;
  elevation: 3;
  border-radius: 8px;
  shadow-opacity: 1;
  shadow-radius: 6px;
  shadow-color: ${colors.black_30};
`;

export const EnterpriseImage = styled.Image`
  position: absolute;
  left: 10;
  top: 10;
  height: 60px;
  width: 60px;
  resize-mode: cover;
  border-radius: 6px;
  elevation: 3;
`;

export const SubTitle = styled.Text`
  font-size: 10px;
  font-weight: 300;
  color: ${colors.base};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.slate};
`;
