import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import Activity from './Activity';

export default function ListOfActivities({ id, listOfActivities }) {
  const { selected, setSelected } = useToggle();

  return (
    <>
      <ListWrapper>
        {listOfActivities[id - 1].Activity.map((activity, index) => {
          return (
            <Activity
              key={index}
              name={activity.name}
              start={activity.startAt}
              end={activity.endsAt}
              vacancies={activity.vacancies}
              isAvailable={activity.vacancies > 0}
              isSelected={selected.name === activity.name}
              callback={setSelected}
            />
          );
        })}
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
