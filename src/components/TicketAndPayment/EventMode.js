import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import Event from './Event';
import EventOnline from './EventOnline';
import EventPresential from './EventPresential';

export default function EventMode() {
  const { selected, setSelected } = useToggle();
  const MODALITIES = [
    { id: 1, type: 'Presencial', price: 500 },
    { id: 2, type: 'Online', price: 150 },
  ];

  return (
    <EventContainer>
      <ModalityEvent>
        {MODALITIES.map((modality, index) => {
          return (
            <Event
              key={index}
              type={modality.type}
              price={modality.price}
              isSelected={selected.type === modality.type && selected.price === modality.price}
              callback={setSelected}
            />
          );
        })}
      </ModalityEvent>
      {selected.type === 'Presencial' ? <EventPresential type={selected.type} price={selected.price}/> : <></>}
      {selected.type === 'Online' ? <EventOnline type={selected.type} price={selected.price} /> : <></>}
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
