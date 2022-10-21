import styled from 'styled-components';
import usePaymentContext from '../../contexts/PaymentContext';

export default function ResumeOrder() {
  const { eventData } = usePaymentContext();
  const total = eventData.modalityPrice + eventData.hostingPrice;

  return (
    <ResumeWrapper>
      {eventData.modalityType === 'Presencial' ? (
        <>
          <span>{`${eventData.modalityType} + ${eventData.accommodation}`}</span>
          <h6>{`R$ ${eventData.totalValue}`}</h6>
        </>
      ) : (
        <>
          <span>{eventData.modalityType}</span>
          <h6>{`R$ ${eventData.totalValue}`}</h6>
        </>
      )}
    </ResumeWrapper>
  );
}

const ResumeWrapper = styled.div`
  height: 108px;
  max-width: 290px;
  border-radius: 20px;
  background-color: #ffeed2;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px 0;

  font-weight: 400;

  span {
    color: #454545;
    font-size: 16px;
    line-height: 19px;
  }

  h6 {
    color: #898989;
    font-size: 14px;
    line-height: 16px;
  }
`;
