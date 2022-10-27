import usePaymentContext from '../../contexts/PaymentContext';
import SubTitleTypography from '../SubTitleTypography';
import ConfirmedPayment from './ConfirmedPayment';
import PaymentInfo from './PaymentInfo';
import ResumeOrder from './ResumeOrder';

export default function CloseOrder() {
  const { confirmedPayment } = usePaymentContext();

  return (
    <>
      <SubTitleTypography title={'Ingresso escolhido'} />
      <ResumeOrder />
      <SubTitleTypography title={'Pagamento'} />
      {confirmedPayment === null ? <PaymentInfo /> : <ConfirmedPayment />}
    </>
  );
}
