import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: white;
  font-size: 50px;
  font-weight: bold;
`;

export const Content = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  border-color: #ffffff;
  border-width: 1px;
`;

export const ContentText = styled.Text`
  color: white;
  margin-left: 3px;
  font-weight: bold
`;

