import styled from 'styled-components';
import Event from './Event';
import useToggle from '../../hooks/useToggle';
import EventOnline from './EventOnline';

export default function EventMode() {
  const { firstOption, secondOption, selectFirstOption, selectSecondOption } = useToggle();
  let price = '800';

  return (
    <EventContainer>
      <ModalityEvent>
        <Event type={'Presencial'} price={`R$ ${price}`} isSelected={firstOption} callback={selectFirstOption} />
        <Event type={'Online'} price={`R$ ${price}`} isSelected={secondOption} callback={selectSecondOption} />
      </ModalityEvent>
      {secondOption ? <EventOnline price={price} /> : <></>}
    </EventContainer>
  );
}

const EventContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalityEvent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0 24px;
  margin-bottom: 44px;
`;
