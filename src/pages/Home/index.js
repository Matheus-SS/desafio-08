import React from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Body,
  ProductImage,
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductAddButton,
  ProductAddButtonAmount,
  ProductAddButtonAmountText,
  ProductAddButtonText,
} from './style';
import tenis from '../../assets/images/tenis.jpg';

const product = [
  {
    id: '1',
    image: tenis,
    name: 'Tenis de Caminhada Leve Confortavel',
    price: '189,90',
  },
  {
    id: '2',
    image: tenis,
    name: 'Tenis de Caminhada Leve Confortavel',
    price: '189,90',
  },
  {
    id: '3',
    image: tenis,
    name: 'Tenis de Caminhada Leve Confortavel',
    price: '189,90',
  },
  {
    id: '4',
    image: tenis,
    name: 'Tenis de Caminhada Leve Confortavel',
    price: '189,90',
  },
  {
    id: '5',
    image: tenis,
    name: 'Tenis de Caminhada Leve Confortavel',
    price: '189,90',
  },
];
const Home = () => {
  return (
    <Body style={{ backgroundColor: '#000', flex: 1 }}>
      <View>
        <FlatList
          horizontal
          data={product}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductContainer>
              <ProductImage source={item.image} resizeMode="cover" />
              <ProductName>{item.name}</ProductName>
              <ProductPrice>R$ {item.price}</ProductPrice>

              <ProductAddButton>
                <ProductAddButtonAmount
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <ProductAddButtonAmountText>33</ProductAddButtonAmountText>
                </ProductAddButtonAmount>
                <ProductAddButtonText>ADICIONAR</ProductAddButtonText>
              </ProductAddButton>
            </ProductContainer>
          )}
        />
      </View>
    </Body>
  );
};

export default Home;
