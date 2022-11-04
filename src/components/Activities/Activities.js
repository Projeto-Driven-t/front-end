import React from 'react';
import SubTitleTypography from '../SubTitleTypography';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import useToggle from '../../hooks/useToggle';

import { ActivitiesWrapper } from './ActivitiesWrapper';
import useActivities from '../../hooks/api/useActivities';
import ActivitiesDays from './ActivitiesDays';

export default function Activities() {
  const { selected, setSelected } = useToggle();
  const { activities } = useActivities();
  const [listOfActivities, setListOfActivities] = React.useState([]);
  const [distinctDays, setDistinctDays] = React.useState([]);

  const renderActivities = async() => {
    try {
      await setListOfActivities([...activities]);
      await setDistinctDays([...new Set(activities.map((activity) => activity.date))]);
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
          {
            distinctDays.map((day, index) => {
              return (
                <ActivitiesDays
                  key={index}
                  date={day}
                  isSelected={selected.date === day}
                  callback={setSelected}
                />
              );
            })
          }
        </ListOfDays>
        {selected.date ? <SubTitleTypography title={'Agora escolha as atividades'} /> : <></>}
      </ActivitiesWrapper>
    </>
  );
};

const ListOfDays = styled.div`
  display: flex;
`;
