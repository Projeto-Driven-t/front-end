import Payment from 'payment';
import { toast } from 'react-toastify';

export default function paymentValidation({ name, cardNumber, expirationDate, cvc }) {
  const date = expirationDate.split('/');

  if (name === '' || cardNumber === '' || expirationDate === '' || cvc === '') {
    toast('Todos os campos devem serem preenchidos');
  }
  if (!Payment.fns.validateCardNumber(cardNumber)) {
    toast('Cartão inválido');
    return;
  }
  if (!Payment.fns.validateCardExpiry(...date)) {
    toast('Data de expiração inválida');
    return;
  }
  if (!Payment.fns.validateCardCVC(cvc)) {
    toast('CVC inválido');
    return;
  }
}
