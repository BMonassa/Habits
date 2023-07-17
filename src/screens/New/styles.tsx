import styled from 'styled-components/native';
import { roseQuartz } from '../../constants/colors';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #AAC8A7;
  padding: 80px 24px 0 24px;
`;

export const ContentText = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: 12px;
`;

export const ContentSubText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-top: 32px;
`;

export const ContentTextInput = styled.TextInput`
  height: 50px;
  padding-left: 16px;
  border-radius: 8px;
  margin-top: 8px;
  background-color: #fdfdfd96;
  color: #08080893;
  font-weight: bold;
`;

export const ContainerButton = styled.TouchableOpacity`
  background-color: #FDFFAE;
  height: 50px;
  border-radius: 8px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContentButton = styled.Text`
  color: #FF9B9B;
  font-size: 20px;
  font-weight: bold;
  padding-left: 4px;
`;

