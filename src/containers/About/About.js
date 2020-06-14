import React from 'react';
import Swiper from 'react-native-swiper';
import {View, Text, Image} from 'react-native';

import {Container, MenuItem, MenuText, Item, CustomText} from './styles';

const About = ({navigation}) => {
  return (
    <Container>
      <Image
        source={require('../../../assets/logo.png')}
        style={{marginBottom: 10, marginTop: 50}}
      />
      <Swiper loop={false} dotColor="grey" activeDotColor="#FFF">
        <Item>
          <Image source={require('../../../assets/1.png')} />
          <CustomText>
            Rotas especialmente criadas para veículos pesados
          </CustomText>
        </Item>
        <Item>
          <Image source={require('../../../assets/2.png')} />
          <CustomText>
            Cuidados em saúde adaptados à rotina do caminhoneiro
          </CustomText>
        </Item>
        <Item>
          <Image source={require('../../../assets/3.png')} />
          <CustomText>
            Comunicação segura com seus amigos e empresas parceiras
          </CustomText>
        </Item>
        <Item>
          <Image source={require('../../../assets/4.png')} />
          <CustomText>
            Os melhores locais para pernoite, restaurantes, oficinas e muito
            mais!
          </CustomText>
        </Item>
      </Swiper>
      <MenuItem
        onPress={() => {
          navigation.navigate('home');
        }}>
        <MenuText>PULAR</MenuText>
      </MenuItem>
    </Container>
  );
};

export default About;
