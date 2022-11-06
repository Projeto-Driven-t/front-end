import styled from 'styled-components';
import { BiLogIn, BiXCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export default function Activity({ name, start, end, vacancies, isAvailable, isSelected, callback }) {
  let size = '80px';
  const startTime = dayjs(start, 'HH:mm');
  const endTime = dayjs(end, 'HH:mm');
  let subtractionresult = endTime.diff(startTime, 'hour');

  if (subtractionresult > 1) {
    size = `${subtractionresult * 80}px`;
  }

  if (!isAvailable) {
    return (
      <ActivityWrapper style={{ height: size }} onClick={() => toast('Este evento está esgotado')}>
        <ActivityInfo>
          <h5>{name}</h5>
          <h6>
            {start} - {end}
          </h6>
        </ActivityInfo>
        <IconWrapper isAvailable={isAvailable}>
          <BiXCircle />
          <h6>Esgotado</h6>
        </IconWrapper>
      </ActivityWrapper>
    );
  } else {
    return (
      <ActivityWrapper style={{ height: size }} isSelected={isSelected} onClick={() => callback({ name })}>
        <ActivityInfo>
          <h5>{name}</h5>
          <h6>
            {start} - {end}
          </h6>
        </ActivityInfo>
        <IconWrapper isAvailable={isAvailable} isSelected={isSelected}>
          <BiLogIn />
          <h6>{vacancies} vagas</h6>
        </IconWrapper>
      </ActivityWrapper>
    );
  }
}

const ActivityWrapper = styled.div`
  max-width: 265px;
  padding: 12px 10px;
  border-radius: 5px;
  background-color: ${({ isSelected }) => (isSelected ? '#D0FFDB' : '#f1f1f1')};

  display: flex;
  justify-content: space-between;

  font-family: 'Roboto';
  font-size: 12px;
  line-height: 14px;
  color: #343434;

  h5 {
    font-weight: 700;
  }

  h6 {
    font-weight: 400;
  }
`;

const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px 0;
`;

const IconWrapper = styled.div`
  width: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  border-left: ${({ isSelected }) => (isSelected ? '1px solid #99E8A1' : '1px solid #cfcfcf')};

  color: ${({ isAvailable }) => (isAvailable ? '#078632' : '#CC6666')};

  svg {
    width: 20px;
    height: 20px;
  }

  h6 {
    font-size: 9px;
    line-height: 11px;
  }
`;
