import TicketAndPayment from '../../../components/TicketAndPayment';
import TitleTypography from '../../../components/TitleTypography';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const { enrollment } = useEnrollment();
  return (
    <>
      <TitleTypography title={'Ingressos e pagamento'} />
      {enrollment ? (
        <TicketAndPayment />
      ) : (
        <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
      )}
    </>
  );
}
