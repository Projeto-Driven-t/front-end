import styled from 'styled-components';
import Button from '../Form/Button';
import SubTitleTypography from '../SubTitleTypography';

export default function EventOnline({ price }) {
  return (
    <OrderContainer>
      <SubTitleTypography title={`Fechado! O total ficou em R$ ${price}. Agora é só confirmar:`} />
      <CloseOrderContainer>
        <Button type="submit">Reservar Ingresso</Button>
      </CloseOrderContainer>
    </OrderContainer>
  );
}

const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseOrderContainer = styled.div`
  width: 100%;
`;
