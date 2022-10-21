import styled from 'styled-components';

export default function Event({ type, price, isSelected, callback }) {
  return (
    <EventType isSelected={isSelected} onClick={() => callback({ type, price })}>
      <h5>{type}</h5>
      <h6>{`R$ ${price}`}</h6>
    </EventType>
  );
}

const EventType = styled.div`
  width: 145px;
  height: 145px;

  background: ${({ isSelected }) => (isSelected ? '#FFEED2' : 'transparent')};
  border: 1px solid ${({ isSelected }) => (isSelected ? 'FFEED2' : '#CECECE')};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px 0;

  font-weight: 400;

  h5 {
    font-size: 16px;
    line-height: 18.75px;
    color: #454545;
  }

  h6 {
    font-size: 14px;
    line-height: 16.4px;
    color: #898989;
  }
`;
