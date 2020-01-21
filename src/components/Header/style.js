import styled from 'styled-components/native';
<<<<<<< HEAD

export const Container = styled.View`
  flex: 1;
  padding: ;
=======
import logo from '../../assets/images/logo.png';

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Container = styled.View`
  height: 50px;
  flex: 1;
  align-items: center;
  background-color: #000;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 228px;
  height: 30px;
`;

export const ShoppingBasketContainer = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

export const ShoppingBasketAmount = styled.Text`
  position: absolute;
  background-color: #7159c1;
  top: 5px;
  right: -7px;
  color: #fff;
  min-width: 18px;
  min-height: 18px;
  border-radius: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding: 1px;
>>>>>>> 8a17f3de1d0342fecaff33a193419bcf05f40893
`;
