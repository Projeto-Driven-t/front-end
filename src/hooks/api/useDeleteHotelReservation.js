import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useDeleteHotelReservation() {
  const token = useToken();

  const {
    loading: deleteReservationLoading,
    error: deleteReservationError,
    act: deleteReservation,
  } = useAsync(() => hotelApi.deleteReservation(token), false);

  return {
    deleteReservationLoading,
    deleteReservationError,
    deleteReservation,
  };
}
