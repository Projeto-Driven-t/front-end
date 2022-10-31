import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useHotelContext from '../../contexts/HotelContext';

export default function HotelCard({ id, name, image, roomTypes, vacancies, isSelected, callback }) {
  const { setHotelData } = useHotelContext();

  function hotelSelection() {
    setHotelData({
      hotelId: id,
      name,
      image,
    });
  }

  return (
    <Card isSelected={isSelected} onClick={() => (hotelSelection(), callback({ id, name, image }))}>
      <img src={image} alt={name} />
      <div className='Hotel-Info'>
        <div>
          <Typography variant='h7'>{name}</Typography>
        </div>
        <div className='Hotel-Info'>
          <span className='minor-info'>Tipos de acomodação: </span>
          <span className='minor-info no-bold'>{roomTypes}</span>
        </div>
        <div className='Hotel-Info'>
          <span className='minor-info'>Vagas disponíveis: </span>
          <span className='minor-info no-bold'>{vacancies}</span>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  width: 196px;
  height: 264px;
  margin-right: 16px;
  background: ${({ isSelected }) => (isSelected ? '#FFEED2' : '#F1F1F1')};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px 14px;
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }

  .accommodation {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .minor-info {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  .no-bold {
    font-weight: 400;
  }

  .Hotel-Info {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
`;
