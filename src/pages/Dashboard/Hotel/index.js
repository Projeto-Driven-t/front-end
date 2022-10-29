import TitleTypography from '../../../components/TitleTypography';
import useCheckTicket from '../../../hooks/api/useCheckTicket';
import HotelAndRoom from '../../../components/Hotel';
import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function Payment() {
  const { checkTicket } = useCheckTicket();
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    if(!checkTicket) {
      setMessage('Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem');
    }else if(checkTicket.modality === 'Online' || checkTicket.accommodation === 'Sem Hotel') {
      setMessage('Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades');
    }
  }, [checkTicket]);

  return (
    <Container>
      <TitleTypography title={'Escolha de Hotel e Quarto'} />
      {
        (checkTicket && checkTicket.modality === 'Presencial') || (checkTicket && checkTicket.accommodation === 'Com Hotel') ?
          <p>Escolha de Hotel Coming Soon...</p>
          :
          message
      }
    </Container>
  );
}

const Container = styled.div`
`;
