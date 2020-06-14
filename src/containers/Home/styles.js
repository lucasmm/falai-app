import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #03adff;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled.TouchableOpacity`
  background-color: #000;
  border-radius: 5px;
  width: 60%;
  padding: 10px 0;
  margin-top: 10px;
  align-items: center;
`;

export const MenuText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
