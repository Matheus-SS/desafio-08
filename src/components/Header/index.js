import React from 'react';
import { View, Text, Button } from 'react-native';

import logo from '../../assets/images/logo.svg';

function Header({ navigation }) {
  return (
    <View>
      <Button title="HOME" onPress={() => navigation.navigate('Home')} />

      <Button title="carrinho" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}

export default Header;
