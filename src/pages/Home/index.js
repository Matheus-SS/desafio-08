import React from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';

import {
  ProductImage,
  ProductContainer,
  ProductName,
  ProductPrice,
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
    <View style={{ backgroundColor: '#000', flex: 1 }}>
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

              <View>
                <View>
                  <Text>C</Text>
                  <Text>0</Text>
                </View>
                <Text>ADICIONAR</Text>
              </View>
            </ProductContainer>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
