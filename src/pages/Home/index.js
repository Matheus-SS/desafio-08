/* eslint-disable react/state-in-constructor */
import React from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import {
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

class Home extends React.Component {
  async componentDidMount() {
    const response = await api.get('/stock');
    console.tron.log(response.data[0]);
  }

  render() {
    return (
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
    );
  }
}

export default Home;
