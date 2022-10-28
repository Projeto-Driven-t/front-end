import styled from 'styled-components';
import { BsPersonFill, BsPerson } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default function Room({ number, maxVacancies, availableVacancies, isSelected, isAvailable, callback }) {
  const filledVacancies = maxVacancies - availableVacancies;

  if (!isAvailable) {
    return (
      <Container isAvailable={isAvailable} onClick={() => toast('Este quarto não está disponível')}>
        <Number>{number}</Number>
        <Vacancies>
          {Array.from({ length: filledVacancies }).map((_, index) => {
            return <BsPersonFill key={index} />;
          })}
        </Vacancies>
      </Container>
    );
  } else {
    return (
      <Container isAvailable={isAvailable} isSelected={isSelected} onClick={() => callback({ number })}>
        <Number>{number}</Number>
        <Vacancies isSelected={isSelected}>
          {Array.from({ length: availableVacancies }).map((_, index) => {
            if (isSelected && index === availableVacancies - 1) {
              return <BsPersonFill key={index} isSelected={isSelected} style={{ color: '#FF4791' }} />;
            } else {
              return <BsPerson key={index} />;
            }
          })}
          {Array.from({ length: filledVacancies }).map((_, index) => {
            return <BsPersonFill key={index} />;
          })}
        </Vacancies>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 190px;
  height: 45px;
  padding: 12px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ isSelected, isAvailable }) => (isSelected ? '#FFEED2' : isAvailable ? 'transparent' : '#CECECE')};
  color: ${({ isAvailable }) => (isAvailable ? '#454545' : '#8C8C8C')};
  border: 1px solid #cecece;
  border-radius: 10px;
`;

const Number = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
`;

const Vacancies = styled.span`
  display: flex;
  align-items: center;
  gap: 0 5px;

  svg {
    width: 20.25px;
    height: 20.25px;
  }
`;
