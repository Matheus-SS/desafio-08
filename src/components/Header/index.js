import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  Wrapper,
  Logo,
  ShoppingBasketContainer,
  ShoppingBasketAmount,
} from './style';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo />
        </TouchableOpacity>

        <ShoppingBasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="basket" size={35} color="#FFF" />
          <ShoppingBasketAmount>{cartSize}</ShoppingBasketAmount>
        </ShoppingBasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  // It returns the current state from reducer cart
  cartSize: state.cart.length,
}))(Header);
