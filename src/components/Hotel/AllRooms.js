import { toast } from 'react-toastify';
import styled from 'styled-components';
import useHotelContext from '../../contexts/HotelContext';
import useSaveHotel from '../../hooks/api/useSaveHotel';
import useUpdateRoom from '../../hooks/api/useUpdateRoom';
import useToggle from '../../hooks/useToggle';
import Button from '../Form/Button';
import SubTitleTypography from '../SubTitleTypography';
import Room from './Room';

export default function AllRooms({ rooms, id }) {
  const { selected, setSelected } = useToggle();
  const { hotelData, setHotelData, render, setRender } = useHotelContext();
  const { saveHotel, saveHotelLoading } = useSaveHotel();
  const { updateRoom } = useUpdateRoom();

  async function reserveRoom() {
    setHotelData({
      ...hotelData,
      type: selected.type,
      number: selected.number,
      roomId: selected.id,
      maxVacancies: selected.maxVacancies,
      availableVacancies: selected.availableVacancies,
    });

    try {
      await saveHotel({
        hotelId: hotelData.hotelId,
        roomId: selected.id,
      });

      await updateRoom({
        hotelId: hotelData.hotelId,
        type: selected.type,
        number: selected.number,
        maxVacancies: selected.maxVacancies,
        availableVacancies: selected.availableVacancies - 1,
        updatedAt: new Date(),
      });

      toast('Reservado com sucesso');
      setRender(!render);
    } catch (err) {
      toast('Você já possui uma reserva');
    }
  }

  return (
    <>
      <SubTitleTypography title={'Ótima pedida! Agora escolha seu quarto: '} />
      <Container>
        {rooms[id - 1].Room.map((room, index) => {
          return (
            <Room
              key={index}
              id={room.id}
              type={room.type}
              number={room.number}
              maxVacancies={room.maxVacancies}
              availableVacancies={room.availableVacancies}
              isSelected={
                selected.id === room.id &&
                selected.type === room.type &&
                selected.number === room.number &&
                selected.maxVacancies === room.maxVacancies &&
                selected.availableVacancies === room.availableVacancies
              }
              isAvailable={room.availableVacancies > 0}
              callback={setSelected}
            />
          );
        })}
      </Container>
      <BookRoom>
        {selected.id && selected.type && selected.number && selected.maxVacancies && selected.availableVacancies ? (
          <Button onClick={() => reserveRoom()} disabled={saveHotelLoading}>Reservar Quarto</Button>
        ) : (
          <></>
        )}
      </BookRoom>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 17px;
  margin-bottom: 30px;
`;

const BookRoom = styled.span``;
