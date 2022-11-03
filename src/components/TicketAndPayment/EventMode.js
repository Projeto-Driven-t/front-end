import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import useToggle from '../../hooks/useToggle';
import useModality from '../../hooks/api/useModality';

import Event from './Event';
import EventOnline from './EventOnline';
import EventPresential from './EventPresential';
import useAccommodation from '../../hooks/api/useAccommodation';

export default function EventMode() {
  const { selected, setSelected } = useToggle();
  const [listOfModalities, setListOfModalities] = useState([]);
  const [listOfAccommodations, setListOfAccommodations] = useState([]);
  const { modality } = useModality();
  const { accommodation } = useAccommodation();

  async function renderData() {
    try {
      await setListOfModalities([...modality]);
      await setListOfAccommodations([...accommodation]);
    } catch (err) {
      toast('Não foi possível carregar os ingressos');
    }
  }

  useEffect(() => {
    if (modality && accommodation) {
      renderData();
    }
  }, [modality, accommodation]);

  return (
    <TicketContainer>
      <ModalityContainer>
        {listOfModalities.map((event, index) => {
          return (
            <Event
              key={index}
              type={event.modality}
              price={event.price}
              isSelected={selected.type === event.modality && selected.price === event.price}
              callback={setSelected}
            />
          );
        })}
      </ModalityContainer>
      {selected.type === 'Presencial' ? (
        <EventPresential type={selected.type} price={selected.price} accommodation={listOfAccommodations} />
      ) : (
        <></>
      )}
      {selected.type === 'Online' ? <EventOnline type={selected.type} price={selected.price} /> : <></>}
    </TicketContainer>
  );
}

const TicketContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalityContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0 24px;
  margin-bottom: 44px;
`;
