import useHotelContext from '../../contexts/HotelContext';
import Button from '../Form/Button';
import SubTitleTypography from '../SubTitleTypography';
import Typography from '@material-ui/core/Typography';
import { Card } from './HotelCard';
import styled from 'styled-components';

export default function HotelConfirmation() {
  const { hotelData } = useHotelContext();
  const { hotelId, name, image, type, number, roomId, maxVacancies } = hotelData;

  return (
    <>
      <SubTitleTypography title={'Você já escolheu seu quarto:'} />
      <Card isSelected={true}>
        <img src={image} alt={`Imagem do hotel ${name}`} />
        <div className="Hotel-Info">
          <div>
            <Typography variant="h7">{name}</Typography>
          </div>
          <div className="Hotel-Info">
            <span className="minor-info">Quarto reservado: </span>
            <span className="minor-info no-bold">{`${number} (${type})`}</span>
          </div>
          <div className="Hotel-Info">
            <span className="minor-info">Pessoas no seu quarto </span>
            <span className="minor-info no-bold">
              {type === 'Single' ? 'Somente você' : `Você e mais ${maxVacancies - 1}`}
            </span>
          </div>
        </div>
      </Card>
      <ChangeRoom>
        <Button>Trocar de Quarto</Button>
      </ChangeRoom>
    </>
  );
}

const ChangeRoom = styled.div`
  margin-top: 30px;
`;
