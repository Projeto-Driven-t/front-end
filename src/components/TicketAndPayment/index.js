import usePaymentContext from '../../contexts/PaymentContext';
import CloseOrder from './CloseOrder';
import Ticket from './Ticket';

export default function IngressAndPayment() {
  const { render } = usePaymentContext();

  return (
    <>
      {render ? <CloseOrder /> : <Ticket />}
    </>
  );
}
