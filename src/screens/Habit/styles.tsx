import styled from 'styled-components/native';
import { darken, greenBackground, info, roseQuartz, white } from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${greenBackground};
  padding: 48px 32px 0 32px;
`;

export const ContainerDate = styled.Text`
  color: white;
  font-size: 20px;
  margin-top: 16px;
`;

export const ContainerDay = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const ContainerCheckBox = styled.View`
  flex-direction: row;
  justify-content: space-between
  `;

export const ContainerText = styled.View`
  margin-top: 50px;
  background-color: ${roseQuartz};
  border-radius: 16px;
  width: 350px;
  height: 80px;
  align-items: center;
  justify-content: center;
  `;

export const ContentText = styled.Text`
  color: ${white};
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
  `;

export const ContainerAnimated = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  `;

export const ContentAnimated = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  `;

  export const ContainerHeader = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  `;

  export const ContentHeader = styled.View`
  flex-direction: column;
  padding-right: 50px;
  `;



