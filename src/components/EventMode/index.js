import usePaymentContext from '../../contexts/PaymentContext';
import TitleTypography from '../TitleTypography';
import CloseOrder from './CloseOrder';
import Ticket from './Ticket';

export default function IngressPayment() {
  const { render } = usePaymentContext();

  return (
    <>
      <TitleTypography title={'Ingressos e pagamento'} />
      {render ? <CloseOrder /> : <Ticket />}
    </>
  );
}
