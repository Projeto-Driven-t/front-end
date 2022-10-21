import SubTitleTypography from '../SubTitleTypography';
import EventMode from './EventMode';
import { EventWrapper } from './EventWrapper';

export default function Ticket() {
  return (
    <>
      <SubTitleTypography title={'Primeiro, escolha sua modalidade de ingresso'} />
      <EventWrapper>
        <EventMode />
      </EventWrapper>
    </>
  );
}
