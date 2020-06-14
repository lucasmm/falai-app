import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;
const buttonPadding = width - 60 + 'px';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const GoButton = styled.TouchableOpacity`
  position: absolute;
  width: ${buttonPadding};
  height: 50px;
  align-items: center;
  justify-content: center;
  left: 30px;
  bottom: 30px;
  background-color: #000000;
  border-radius: 10px;
`;

const GoButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const LoadButton = ({onPress, children}) => (
  <GoButton onPress={onPress}>
    <GoButtonText>{children}</GoButtonText>
  </GoButton>
);
