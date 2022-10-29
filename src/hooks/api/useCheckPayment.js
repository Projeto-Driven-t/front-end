import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useCheckPayment() {
  const token = useToken();

  const {
    data: checkPayment,
    loading: checkPaymentLoading,
    error: checkPaymentError,
    act: getCheckPayment
  } = useAsync(() => paymentApi.checkPayment(token));

  return {
    checkPaymentLoading,
    checkPaymentError,
    checkPayment,
    getCheckPayment
  };
}

