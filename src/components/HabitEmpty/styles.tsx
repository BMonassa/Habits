import styled from 'styled-components/native';
import { greenBackground } from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContentText = styled.Text`
  color: white;
  font-size: 20px;
  margin-top: 20px;
`;

export const ContainerButton = styled.TouchableOpacity`
  background-color: #FDFFAE;
  height: 50px;
  border-radius: 8px;
  margin-top: 32px;
  align-items: center;
  justify-content: center;
`;

export const ContentButton = styled.Text`
  color: #FF9B9B;
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
`;
