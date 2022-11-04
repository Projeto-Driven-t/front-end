import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitesApi';

export default function useActivities() {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivities
  } = useAsync(() => activitiesApi.getActivities(token));

  return {
    activitiesLoading,
    activitiesError,
    activities,
    getActivities
  };
};
