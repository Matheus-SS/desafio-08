/* eslint-disable react/state-in-constructor */
import React from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import 'numeral/locales/pt-br';
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

class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <View>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductContainer key={item.id}>
              <ProductImage source={{ uri: item.image }} resizeMode="cover" />
              <ProductName>{item.title}</ProductName>
              <ProductPrice>{item.priceFormatted}</ProductPrice>

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
