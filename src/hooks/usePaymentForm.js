import { useState } from 'react';
import paymentValidation from '../components/TicketAndPayment/PaymentValidation';
import usePaymentContext from '../contexts/PaymentContext';
import useSavePayment from './api/useSavePayment';
import useSaveTicket from './api/useSaveTicket';

export default function usePaymentForm() {
  const { eventData, setConfirmedPayment } = usePaymentContext();
  const { savePayment } = useSavePayment();
  const { saveTicket } = useSaveTicket();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    focus: '',
  });

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrors(paymentValidation(values));
    await savePayment({
      name: values.name,
      cardNumber: values.cardNumber,
      expirationDate: values.expirationDate,
      cvv: values.cvc,
      totalValue: `${eventData.totalValue}`,
    });
    const ticket = await saveTicket({
      modality: eventData.modalityType,
      modalityPrice: eventData.modalityPrice,
      accommodation: eventData.accommodation,
      accommodationPrice: eventData.hostingPrice,
      totalValue: eventData.totalValue,
    });

    if (ticket) {
      setConfirmedPayment(ticket);
    }
  };

  return {
    errors,
    values,
    setValues,
    handleChange,
    handleFocus,
    handleSubmit,
  };
}
