import useAsync from '../useAsync';

import * as accommodationApi from '../../services/accommodationApi';
import useToken from '../useToken';

export default function useAccommodation() {
  const token = useToken();
  
  const {
    data: accommodation,
    loading: accommodationLoading,
    error: accommodationError,
    act: getAccommodation
  } = useAsync(() => accommodationApi.getAccommodation(token));
  
  return {
    accommodation,
    accommodationLoading,
    accommodationError,
    getAccommodation
  };
}
