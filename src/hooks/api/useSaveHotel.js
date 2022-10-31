import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useSaveHotel() {
  const token = useToken();

  const {
    loading: saveHotelLoading,
    error: saveHotelError,
    act: saveHotel
  } = useAsync((data) => hotelApi.bookHotel(data, token), false);

  return {
    saveHotelLoading,
    saveHotelError,
    saveHotel
  };
}
