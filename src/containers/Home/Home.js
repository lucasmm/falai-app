import React from 'react';
import {Image} from 'react-native';

import {Container, MenuItem, MenuText} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <Image
        source={require('../../../assets/logo.png')}
        style={{marginBottom: 80}}
      />
      <MenuItem onPress={() => navigation.push('chatbot')}>
        <MenuText>CHATBOT</MenuText>
      </MenuItem>
      <MenuItem onPress={() => navigation.push('planning')}>
        <MenuText>ROTA</MenuText>
      </MenuItem>
    </Container>
  );
};

export default Home;
