import usePaymentContext from '../../contexts/PaymentContext';
import useCheckTicket from '../../hooks/api/useCheckTicket';
import CloseOrder from './CloseOrder';
import Ticket from './Ticket';

export default function IngressAndPayment() {
  const { setEventData, setConfirmedPayment, render } = usePaymentContext();
  const { checkTicket } = useCheckTicket();

  if (checkTicket) {
    setEventData(checkTicket);
    setConfirmedPayment(true);
  }

  return (
    <>
      {render || checkTicket ? <CloseOrder /> : <Ticket />}
    </>
  );
}
