import useHotelContext from '../../contexts/HotelContext';
import Hotel from './Hotel';
import HotelConfirmation from './HotelConfirmation';

export default function HotelAndRoom() {
  const { render } = useHotelContext();
  return (
    <>
      {render ?  <HotelConfirmation /> : <Hotel />}
    </>
  );
}
