import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useUpdateRoom() {
  const token = useToken();

  const {
    loading: updateRoomLoading,
    error: updateRoomError,
    act: updateRoom
  } = useAsync((data) => hotelApi.update(data, token), false);

  return {
    updateRoomLoading,
    updateRoomError,
    updateRoom
  };
}
