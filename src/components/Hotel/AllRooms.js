import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import Button from '../Form/Button';
import SubTitleTypography from '../SubTitleTypography';
import { rooms } from './mockData';
import Room from './Room';

export default function AllRooms() {
  const { selected, setSelected } = useToggle();

  function reserveRoom() {
    //info de hotel, com nome e id, vem por contexto
    const hotelData = {
      type: selected.type,
      number: selected.number,
      roomId: selected.id,
    };
    //setHotelData ainda será construído
    console.log(hotelData);
  }

  return (
    <>
      <SubTitleTypography title={'Ótima pedida! Agora escolha seu quarto: '} />
      <Container>
        {rooms.map((room, index) => {
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
      {selected.id && selected.type && selected.number ? (
        <Button onClick={() => reserveRoom()}>Reservar Quarto</Button>
      ) : (
        <></>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 17px;
  margin-bottom: 38px;
`;
