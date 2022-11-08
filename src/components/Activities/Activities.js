import React from 'react';
import SubTitleTypography from '../SubTitleTypography';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import useToggle from '../../hooks/useToggle';

import { ActivitiesWrapper } from './ActivitiesWrapper';
import useActivities from '../../hooks/api/useActivities';
import ActivitiesDays from './ActivitiesDays';
import ListOfActivities from './ListOfActivities';

export default function Activities() {
  const { selected, setSelected } = useToggle();
  const { activities } = useActivities();
  const [listOfActivities, setListOfActivities] = React.useState([]);

  const renderActivities = async() => {
    try {
      await setListOfActivities([...activities]);
    } catch (err) {
      toast('Não foi possível carregar as atividades');
    }
  };

  React.useEffect(() => {
    if (activities) {
      renderActivities();
    }
  }, [activities]);

  return (
    <>
      <SubTitleTypography title={'Primeiro, filtre pelo dia do evento'} />
      <ActivitiesWrapper>
        <ListOfDays>
          {listOfActivities.map((day, index) => {
            return (
              <ActivitiesDays
                key={index}
                id={day.id}
                date={day.date}
                isSelected={selected.id === day.id && selected.date === day.date}
                callback={setSelected}
              />
            );
          })}
        </ListOfDays>
        {selected.id && selected.date ? (
          <ListOfActivities id={selected.id} listOfActivities={listOfActivities[selected.id - 1].Place} />
        ) : (
          <></>
        )}
      </ActivitiesWrapper>
    </>
  );
}

const ListOfDays = styled.div`
  display: flex;
  margin-bottom: 60px;
`;
