import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border-radius: 10px;
  padding: 15px 0;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const DefaultButton = ({onPress, children}) => (
  <Button onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </Button>
);

export default DefaultButton;
