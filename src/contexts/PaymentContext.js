import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const PaymentContext = createContext();
const usePaymentContext = () => useContext(PaymentContext);

export default usePaymentContext;

export function PaymentProvider({ children }) {
  const [eventData, setEventData] = useState({});
  const [render, setRender] = useState(false);
  const [confirmedPayment, setConfirmedPayment] = useState(null);

  return (
    <PaymentContext.Provider
      value={{ eventData, setEventData, render, setRender, confirmedPayment, setConfirmedPayment }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
