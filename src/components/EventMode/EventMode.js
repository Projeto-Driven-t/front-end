import styled from 'styled-components';
import Event from './Event';
import useToggle from '../../hooks/useToggle';

export default function EventMode() {
  const { firstOption, secondOption, selectFirstOption, selectSecondOption } = useToggle();

  return (
    <EventContainer>
      <Event type={'Presencial'} price={'R$ 350'} isSelected={firstOption} callback={selectFirstOption}/>
      <Event type={'Online'} price={'R$ 100'} isSelected={secondOption} callback={selectSecondOption}/>
    </EventContainer>
  );
}

const EventContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0 24px;
`;
