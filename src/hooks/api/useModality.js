import useAsync from '../useAsync';

import * as modalityApi from '../../services/modalityApi';
import useToken from '../useToken';

export default function useModality() {
  const token = useToken();

  const {
    data: modality,
    loading: modalityLoading,
    error: modalityError,
    act: getModality
  } = useAsync(() => modalityApi.getModality(token));

  return {
    modality,
    modalityLoading,
    modalityError,
    getModality
  };
}
