import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  );
}

export default Header;
