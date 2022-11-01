import TitleTypography from '../../../components/TitleTypography';
import useCheckTicket from '../../../hooks/api/useCheckTicket';
import React from 'react';
import { useEffect } from 'react';
import HotelAndRoom from '../../../components/Hotel';

export default function Hotel() {
  const { checkTicket } = useCheckTicket();
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    if (!checkTicket) {
      setMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem');
    } else if (checkTicket.modality === 'Online' || checkTicket.accommodation === 'Sem Hotel') {
      setMessage('Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades');
    }
  }, [checkTicket]);

  return (
    <>
      <TitleTypography title={'Escolha de Hotel e Quarto'} />
      {(checkTicket && checkTicket.modality === 'Presencial') ||
      (checkTicket && checkTicket.accommodation === 'Com Hotel') ? (
          <HotelAndRoom />
        ) : (
          message
        )}
    </>
  );
}
