import TicketAndPayment from '../../../components/TicketAndPayment';
import useEnrollment from '../../../hooks/api/useEnrollment';
import TitleTypography from '../../../components/TitleTypography';
import { Warning } from '../../../components/Auth';

export default function Payment() {
  const { enrollment } = useEnrollment();
  
  return (
    <>
      <TitleTypography title={'Ingressos e pagamento'} />
      {enrollment? <TicketAndPayment /> : <Warning>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</Warning>}
    </>
  );
}
