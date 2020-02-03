import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  ProductContainer,
  ProductInfo,
  ProductInfoImage,
  ProductInfoDetails,
  ProductInfoDetailsName,
  ProductInfoDetailsPrice,
  ProcuctInfoDeleteIcon,
  ProductAmount,
  ProductAmountControl,
  ProductAmountInput,
  ProductAmountPrice,
  ProductAmountPriceText,
  ProductTotal,
  ProductTotalText,
  ProductTotalPrice,
  ProductEndOrder,
  ProductEndOrderText,
} from './style';

function Cart({ cart, total, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ProductContainer>
          {cart.map(product => (
            <View key={product.id}>
              <ProductInfo>
                <ProductInfoImage source={{ uri: product.image }} />
                <ProductInfoDetails>
                  <ProductInfoDetailsName>
                    {product.title}
                  </ProductInfoDetailsName>
                  <ProductInfoDetailsPrice>
                    {product.priceFormatted}
                  </ProductInfoDetailsPrice>
                </ProductInfoDetails>
                <ProcuctInfoDeleteIcon
                  onPress={() => removeFromCart(product.id)}
                >
                  <Icon name="delete-forever" size={30} color="#7159c1" />
                </ProcuctInfoDeleteIcon>
              </ProductInfo>

              <ProductAmount>
                <ProductAmountControl>
                  <TouchableOpacity onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </TouchableOpacity>
                  <ProductAmountInput value={String(product.amount)} />
                  <TouchableOpacity onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </TouchableOpacity>
                </ProductAmountControl>

                <ProductAmountPrice>
                  <ProductAmountPriceText>
                    {product.subtotal}
                  </ProductAmountPriceText>
                </ProductAmountPrice>
              </ProductAmount>
            </View>
          ))}

          <ProductTotal>
            <ProductTotalText>Total</ProductTotalText>
            <ProductTotalPrice>{total}</ProductTotalPrice>
          </ProductTotal>

          <ProductEndOrder>
            <ProductEndOrderText>Finalizar Pedido</ProductEndOrderText>
          </ProductEndOrder>
        </ProductContainer>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
