import styled from 'styled-components';

export default function Accommodation({ accommodation, accommodationPrice, isSelected, callback }) {
  return (
    <AccommodationContainer isSelected={isSelected} onClick={() => callback({ accommodation, accommodationPrice })}>
      <AccommodationTitle>{accommodation}</AccommodationTitle>
      <AccommodationPrice>+ R$ {accommodationPrice}</AccommodationPrice>
    </AccommodationContainer>
  );
}

const AccommodationContainer = styled.div`
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
`;

const AccommodationTitle = styled.h3`
  font-size: 16px;
  line-height: 18.75px;
  color: #454545;
`;

const AccommodationPrice = styled.h3`
  font-size: 14px;
  line-height: 16.4px;
  color: #898989;
`;
