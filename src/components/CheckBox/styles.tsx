import styled from 'styled-components/native';
import { greenQuartz, warning } from '../../constants/colors';

interface CheckBoxHolderProps {
  theme?: 'check' | 'delete'
  hideBorder?: boolean;
}

export const Container = styled.TouchableOpacity`
  opacity: 1;
  transition: opacity 0.7s ease-in-out;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;

`;

export const ContentChecked = styled.View<CheckBoxHolderProps>`
  width: 32px;
  height: 32px;
  background-color: #C3EDC0;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  ${({theme}) =>
    theme === 'check' &&
    `
    background-color: ${greenQuartz};
  `}

  ${({theme}) =>
    theme === 'delete' &&
    `
    background-color: ${warning};
  `}
`;

export const Content = styled.View`
  width: 32px;
  height: 32px;
  background-color: #809a7e;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ContentText = styled.Text`
 color: white;
 font-weight: bold;
 margin-left: 8px;
`;

export const ContainerAnimated = styled.View`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
