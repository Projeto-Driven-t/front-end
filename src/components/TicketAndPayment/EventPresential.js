import React from 'react';
import styled from 'styled-components';
import useEventModeContext from '../../contexts/PaymentContext';
import SubTitleTypography from '../SubTitleTypography';
import Button from '../Form/Button';
import Accommodation from './Accommodation';
import useToggle from '../../hooks/useToggle';

export default function EventPresential({ type, price }) {
  const { selected, setSelected } = useToggle();
  
  const { setEventData, render, setRender } = useEventModeContext();

  function closerOnlineOrder() {
    setEventData({ modalityType: type, modalityPrice: 0, accommodation: selected.stayType, hostingPrice: selected.price });
    setRender(!render);
  }

  const accommodation = [
    { id: 1, stayType: 'Sem Hotel', price: 0 },
    { id: 2, stayType: 'Com Hotel', price: 350 }
  ];

  return (
    <>
      <Container>
        <SubTitleTypography title={'Ótimo! Agora escolha sua modalidade de hospedagem'} />
        <AccommodationContainer>
          <ModalityEvent>
            {accommodation.map((accommodation, index) => {
              return (
                <Accommodation
                  key={index}
                  stayType={accommodation.stayType}
                  type={type}
                  accommodationPrice={accommodation.price}
                  eventPrice={price}
                  isSelected={selected.stayType === accommodation.stayType && selected.price === (accommodation.price + price)}
                  callback={setSelected}
                />
              );
            })}
          </ModalityEvent>
        </AccommodationContainer>
        {
          selected.price === undefined ? <></> : (
            <OrderContainer>
              <SubTitleTypography title={`Fechado! O total ficou em R$ ${selected.price}. Agora é só confirmar:`} />
              <CloseOrderContainer>
                <Button type="submit" onClick={() => closerOnlineOrder()}>
                  Reservar Ingresso
                </Button>
              </CloseOrderContainer>
            </OrderContainer>
          )
        }
      </Container>
    </>
  );
}

const Container = styled.div`
`;

const AccommodationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0 24px;
  margin-bottom: 44px;
`;

const ModalityEvent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0 24px;
`;

const OrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseOrderContainer = styled.div`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;
