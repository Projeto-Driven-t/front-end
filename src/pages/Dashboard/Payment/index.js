import TicketAndPayment from '../../../components/TicketAndPayment';
import TitleTypography from '../../../components/TitleTypography';

export default function Payment() {
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
