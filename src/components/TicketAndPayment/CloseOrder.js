import SubTitleTypography from '../SubTitleTypography';
import PaymentInfo from './PaymentInfo';
import ResumeOrder from './ResumeOrder';

export default function CloseOrder() {
  return (
    <>
      <SubTitleTypography title={'Ingresso escolhido'} />
      <ResumeOrder />
      <SubTitleTypography title={'Pagamento'} />
      <PaymentInfo />
    </>
  );
}
