import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Button } from 'react-native';
<<<<<<< HEAD
import { Container } from './style';
import logo from '../../assets/images/logo.svg';

function Header({ navigation }) {
  return (
    <>
      <Container title="HOME" onPress={() => navigation.navigate('Home')} />

      <Container title="carrinho" onPress={() => navigation.navigate('Cart')} />
    </>
=======
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  Wrapper,
  Logo,
  ShoppingBasketContainer,
  ShoppingBasketAmount,
} from './style';

function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo />
        </TouchableOpacity>

        <ShoppingBasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="basket" size={35} color="#FFF" />
          <ShoppingBasketAmount>55</ShoppingBasketAmount>
        </ShoppingBasketContainer>
      </Container>
    </Wrapper>
>>>>>>> 8a17f3de1d0342fecaff33a193419bcf05f40893
  );
}

export default Header;
