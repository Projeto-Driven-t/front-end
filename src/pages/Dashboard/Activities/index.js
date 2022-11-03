import { useState } from 'react';
import { useEffect } from 'react';
import ChoiceOfActivities from '../../../components/Activities';
import TitleTypography from '../../../components/TitleTypography';
import useCheckTicket from '../../../hooks/api/useCheckTicket';
import { Warning } from '../../../components/Auth';

export default function Activities() {
  const { checkTicket } = useCheckTicket();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!checkTicket) {
      setMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de atividades');
    } else if (checkTicket.modality === 'Online') {
      setMessage('Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades');
    }
  }, [checkTicket]);

  return (
    <>
      <TitleTypography title={'Escolha de atividades'} />
      {checkTicket && checkTicket.modality === 'Presencial' ? (
        <ChoiceOfActivities />
      ) : (
        <Warning>{message}</Warning>
      )}
    </>
  );
}
