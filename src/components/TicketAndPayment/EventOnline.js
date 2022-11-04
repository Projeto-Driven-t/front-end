import styled from 'styled-components';
import useEventModeContext from '../../contexts/PaymentContext';
import SubTitleTypography from '../SubTitleTypography';
import Button from '../Form/Button';

export default function EventOnline({ type, price }) {
  const { setEventData, render, setRender } = useEventModeContext();

  function closerOnlineOrder() {
    setEventData({
      modality: type,
      modalityPrice: price,
      accommodation: 'Sem Hotel',
      accommodationPrice: 0,
      totalValue: price,
    });
    setRender(!render);
  }

  return (
    <OrderContainer>
      <SubTitleTypography title={`Fechado! O total ficou em R$ ${price}. Agora é só confirmar:`} />
      <CloseOrderContainer>
        <Button type="submit" onClick={() => closerOnlineOrder()}>
          Reservar Ingresso
        </Button>
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
