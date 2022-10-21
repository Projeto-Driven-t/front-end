import SubTitleTypography from '../SubTitleTypography';
import TitleTypography from '../TitleTypography';
import EventMode from './EventMode';
import { EventWrapper } from './EventWrapper';

export default function IngressPayment() {
  return (
    <>
      <TitleTypography title={'Ingressos e pagamento'} />
      <SubTitleTypography title={'Primeiro, escolha sua modalidade de ingresso'} />
      <EventWrapper>
        <EventMode />
      </EventWrapper>
    </>
  );
}
