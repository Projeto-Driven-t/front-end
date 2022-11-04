import React from 'react';
import styled from 'styled-components';
import useActivitiesContext from '../../contexts/ActivitiesContext';
import ButtonTypography from '../ButtonTypography';

export default function ActivitiesDays({ date, isSelected, callback }) {
  const weekday = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const data = new Date(date);
  
  const { setActivitiesData } = useActivitiesContext();

  function activitiesSelection() {
    setActivitiesData({
      date,
    });
  }

  return (
    <Card isSelected={isSelected} onClick={() => (activitiesSelection(), callback({ date }))}>
      <div className='Activities-Info'>
        <div>
          <ButtonTypography text={`${weekday[data.getDay()]}, ${ data.getDate() }/${ data.getMonth() }`}/>
        </div>
      </div>
    </Card>
  );
}

export const Card = styled.div`
  width: 154px;
  height: 40px;
  margin-right: 16px;
  background: ${({ isSelected }) => (isSelected ? '#FFD37D' : '#F1F1F1')};

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 14px;
`;
