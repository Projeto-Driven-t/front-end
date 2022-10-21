import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const PaymentContext = createContext();
const usePaymentContext = () => useContext(PaymentContext);

export default usePaymentContext;

export function PaymentProvider({ children }) {
  const [eventData, setEventData] = useState({});

  return (
    <PaymentContext.Provider value={{ eventData, setEventData }}>
      {children}
    </PaymentContext.Provider>
  );
}
