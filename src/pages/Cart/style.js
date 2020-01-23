import styled from 'styled-components/native';

export const ProductContainer = styled.View`
  background-color: #fff;
  margin: 20px;
  padding: 7px;
  border-radius: 5px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductInfoImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 5px;
`;

export const ProductInfoDetails = styled.View`
  margin: 10px;
  flex: 1;
`;

export const ProductInfoDetailsName = styled.Text`
  font-size: 16px;
`;

export const ProductInfoDetailsPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0px;
`;

export const ProcuctInfoDeleteIcon = styled.TouchableOpacity`
  justify-content: center;
`;

export const ProductAmount = styled.View`
  margin: 10px 0;
  background: #eee;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;
export const ProductAmountControl = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

export const ProductAmountInput = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  color: #000;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductAmountPrice = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const ProductAmountPriceText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

export const ProductTotal = styled.View`
  margin-bottom: 10px;
  padding: 5px;
  align-items: center;
`;

export const ProductTotalText = styled.Text`
  font-size: 16px;
  color: #999;
  text-transform: uppercase;
`;

export const ProductTotalPrice = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const ProductEndOrder = styled.TouchableOpacity`
  background-color: #7159c1;
  flex-direction: row;
  padding: 8px;
  border-radius: 5px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProductEndOrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
`;
