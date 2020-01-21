import React from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from './style';
import logo from '../../assets/images/logo.svg';

function Header({ navigation }) {
  return (
    <>
      <Container title="HOME" onPress={() => navigation.navigate('Home')} />

      <Container title="carrinho" onPress={() => navigation.navigate('Cart')} />
    </>
  );
}

export default Header;
