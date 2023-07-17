import styled from 'styled-components/native';
import {greenBackground, primary} from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${greenBackground};
  padding: 80px 16px 0 16px;
`;

export const ContainerWeekDays = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 12px;
`;

export const ContentWeekDays = styled.Text`
  color: #7a7575;
  font-weight: bold;
  font-size: 20px;
  margin: 2px;
  text-align: center;
`;

export const ContainerHabit = styled.ScrollView`
  padding-right: 20px;
  padding-left: 20px;
`;

export const ContentHabit = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px 10px 10px;
`;

export const HabitWrapper = styled.View`
  background-color:#6a6f64;
  border-radius: 8px;
  border-width: 1px;
  border-color: #434336;
`;

export const HabitWrapperContent = styled.View`
  padding: 2px;
`;

export const Teste = styled.Text`
  color: red;
`;






