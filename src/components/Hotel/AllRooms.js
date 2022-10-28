import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import SubTitleTypography from '../SubTitleTypography';
import { rooms } from './mockData';
import Room from './Room';

export default function AllRooms() {
  const { selected, setSelected } = useToggle();

  return (
    <>
      <SubTitleTypography title={'Ótima pedida! Agora escolha seu quarto: '} />
      <Container>
        {rooms.map((room, index) => {
          return (
            <Room
              key={index}
              number={room.number}
              maxVacancies={room.maxVacancies}
              availableVacancies={room.availableVacancies}
              isSelected={selected.number === room.number}
              isAvailable={room.availableVacancies > 0}
              callback={setSelected}
            />
          );
        })}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 17px;
`;
