import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
import tenis from '../../assets/images/tenis.jpg';

function Cart() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ProductContainer>
          <View>
            <ProductInfo>
              <ProductInfoImage source={tenis} />
              <ProductInfoDetails>
                <ProductInfoDetailsName>
                  Tenis de Caminhada Leve Confortavel
                </ProductInfoDetailsName>
                <ProductInfoDetailsPrice>R$ 189,90</ProductInfoDetailsPrice>
              </ProductInfoDetails>
              <ProcuctInfoDeleteIcon>
                <Icon name="delete-forever" size={30} color="#7159c1" />
              </ProcuctInfoDeleteIcon>
            </ProductInfo>

            <ProductAmount>
              <ProductAmountControl>
                <TouchableOpacity>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </TouchableOpacity>
                <ProductAmountInput value="33" />
                <TouchableOpacity>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </TouchableOpacity>
              </ProductAmountControl>

              <ProductAmountPrice>
                <ProductAmountPriceText>R$ 199,90</ProductAmountPriceText>
              </ProductAmountPrice>
            </ProductAmount>
          </View>

          <ProductTotal>
            <ProductTotalText>Total</ProductTotalText>
            <ProductTotalPrice>R$ 199,90</ProductTotalPrice>
          </ProductTotal>

          <ProductEndOrder>
            <ProductEndOrderText>Finalizar Pedido</ProductEndOrderText>
          </ProductEndOrder>
        </ProductContainer>
      </ScrollView>
    </View>
  );
}

export default Cart;
