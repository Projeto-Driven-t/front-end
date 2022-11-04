import React from 'react';
import styled from 'styled-components';
import useEventModeContext from '../../contexts/PaymentContext';
import SubTitleTypography from '../SubTitleTypography';
import Button from '../Form/Button';
import Accommodation from './Accommodation';
import useToggle from '../../hooks/useToggle';

export default function EventPresential({ type, price, accommodation }) {
  const { selected, setSelected } = useToggle();

  const { setEventData, render, setRender } = useEventModeContext();

  function closerOnlineOrder() {
    setEventData({
      modality: type,
      modalityPrice: price,
      accommodation: selected.accommodation,
      accommodationPrice: selected.accommodationPrice,
      totalValue: selected.accommodationPrice + price,
    });
    setRender(!render);
  }

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
                  accommodation={accommodation.accommodation}
                  accommodationPrice={accommodation.price}
                  isSelected={
                    selected.accommodation === accommodation.accommodation &&
                    selected.accommodationPrice === accommodation.price
                  }
                  callback={setSelected}
                />
              );
            })}
          </ModalityEvent>
        </AccommodationContainer>
        {selected.accommodation || selected.accommodationPrice ? (
          <OrderContainer>
            <SubTitleTypography title={`Fechado! O total ficou em R$ ${selected.accommodationPrice + price}. Agora é só confirmar:`} />
            <CloseOrderContainer>
              <Button type="submit" onClick={() => closerOnlineOrder()}>
                Reservar Ingresso
              </Button>
            </CloseOrderContainer>
          </OrderContainer>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}

const Container = styled.div``;

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
