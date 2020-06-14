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
  align-items: center;
  margin-bottom: 20px;
`;

export const MenuText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Item = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px 20px 30px;
`;

export const CustomText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;
