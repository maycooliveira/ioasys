import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.backgroundColor};
  height: 52px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonTitle = styled.Text`
  font-size: 14px;
  letter-spacing: 4px;
  font-weight: 600;
  color: #fff;
`;

export const LoadingAction = styled.ActivityIndicator``;
