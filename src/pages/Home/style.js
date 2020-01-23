import styled from 'styled-components/native';
import { darken } from 'polished';

export const ProductContainer = styled.View`
  background-color: #fff;
  padding: 10px;
  margin: 15px;
  width: 220px;
  border-radius: 5px;
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  margin-top: 4px;
`;

export const ProductPrice = styled.Text`
  margin: 4px 0;
  font-size: 18px;
  font-weight: bold;
`;

export const ProductAddButton = styled.TouchableOpacity`
  margin-top: auto;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  background-color: #7159c1;
  border-radius: 5px;
`;

export const ProductAddButtonAmount = styled.View`
  padding: 8px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: ${darken(0.2, 'rgba(0,0,0,0.2)')};
`;
export const ProductAddButtonAmountText = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 6px;
`;
export const ProductAddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;
