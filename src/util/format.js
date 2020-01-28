import Numeral from 'numeral';
import 'numeral/locales/pt-br';

// switch between locales
Numeral.locale('pt-br');

export const formatPrice = number => {
  return Numeral(number).format('$#,##0.00');
};
