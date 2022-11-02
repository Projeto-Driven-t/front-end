import { toast } from 'react-toastify';
import styled from 'styled-components';

import SubTitleTypography from '../SubTitleTypography';
import Typography from '@material-ui/core/Typography';
import { Card } from './HotelCard';
import Button from '../Form/Button';

import useHotelContext from '../../contexts/HotelContext';
import useUpdateRoom from '../../hooks/api/useUpdateRoom';
import useDeleteHotelReservation from '../../hooks/api/useDeleteHotelReservation';

export default function HotelConfirmation() {
  const { hotelData, render, setRender } = useHotelContext();
  const { hotelId, name, image, type, number, maxVacancies, availableVacancies } = hotelData;
  const { updateRoom } = useUpdateRoom();
  const { deleteReservation } = useDeleteHotelReservation();

  async function changeReservation() {
    try {
      await updateRoom({
        hotelId,
        type,
        number,
        maxVacancies,
        availableVacancies,
        updatedAt: new Date(),
      });

      await deleteReservation();

      setRender(!render);
      toast('Escolha um novo quarto');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <SubTitleTypography title={'Você já escolheu seu quarto:'} />
      <Card isSelected={true}>
        <img src={image} alt={`Imagem do hotel ${name}`} />
        <div className='Hotel-Info'>
          <div>
            <Typography variant='h7'>{name}</Typography>
          </div>
          <div className='Hotel-Info'>
            <span className='minor-info'>Quarto reservado: </span>
            <span className='minor-info no-bold'>{`${number} (${type})`}</span>
          </div>
          <div className='Hotel-Info'>
            <span className='minor-info'>Pessoas no seu quarto </span>
            <span className='minor-info no-bold'>
              {type === 'Single' ? 'Somente você' : `Você e mais ${maxVacancies - 1}`}
            </span>
          </div>
        </div>
      </Card>
      <ChangeRoom>
        <Button onClick={() => changeReservation()}>Trocar de Quarto</Button>
      </ChangeRoom>
    </>
  );
}

const ChangeRoom = styled.div`
  margin-top: 30px;
`;
