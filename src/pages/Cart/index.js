import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import tenis from '../../assets/images/tenis.jpg';

const Cart = () => {
  return (
    <View
      style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center' }}
    >
      <View style={{ backgroundColor: 'red' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={tenis} style={{ width: 100, height: 100 }} />
          <View>
            <Text>Tenis de Caminhada Leve Confortavel</Text>
            <Text>189,90</Text>
          </View>
          <Icon name="delete-forever" size={30} color="#fff" />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Icon name="remove-circle-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <TextInput
            value="33"
            editable={false}
            style={{ backgroundColor: '#fff', color: '#000' }}
          />
          <TouchableOpacity>
            <Icon name="add-circle-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <Text>R$ 199,90</Text>
        </View>

        <View>
          <Text>Total</Text>
          <Text>R$ 199,90</Text>
        </View>

        <TouchableOpacity>
          <Text>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
