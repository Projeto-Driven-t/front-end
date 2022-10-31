import styled from 'styled-components';
import useHotelContext from '../../contexts/HotelContext';
import useToggle from '../../hooks/useToggle';
import Button from '../Form/Button';
import SubTitleTypography from '../SubTitleTypography';
import Room from './Room';

export default function AllRooms({ rooms, id }) {
  const { selected, setSelected } = useToggle();
  const { hotelData, setHotelData, render, setRender } = useHotelContext();

  function reserveRoom() {
    setHotelData({
      ...hotelData,
      type: selected.type,
      number: selected.number,
      roomId: selected.id,
    });
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
              isSelected={selected.id === room.id && selected.type === room.type && selected.number === room.number}
              isAvailable={room.availableVacancies > 0}
              callback={setSelected}
            />
          );
        })}
      </Container>
      <BookRoom>
        {selected.id && selected.type && selected.number ? (
          <Button onClick={() => reserveRoom()}>Reservar Quarto</Button>
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

const BookRoom = styled.span`

`;
