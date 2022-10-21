import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import Event from './Event';
import EventOnline from './EventOnline';

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
              price={`R$ ${modality.price}`}
              isSelected={selected === modality.type && selected === modality.price}
              callback={setSelected}
            />
          );
        })}
      </ModalityEvent>
      {selected.type === 'Presencial' ? <>Continuação do pedido</> : <></>}
      {selected.type === 'Online' ? <EventOnline price={selected.price} /> : <></>}
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
