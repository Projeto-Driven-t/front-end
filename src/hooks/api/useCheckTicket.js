import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useCheckTicket() {
  const token = useToken();

  const {
    data: checkTicket,
    loading: checkTicketLoading,
    error: checkTicketError,
    act: getCheckTicket
  } = useAsync(() => ticketApi.checkTicket(token));

  return {
    checkTicketLoading,
    checkTicketError,
    checkTicket,
    getCheckTicket
  };
}
