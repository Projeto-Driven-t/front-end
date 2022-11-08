import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import SubTitleTypography from '../SubTitleTypography';
import Activity from './Activity';

export default function ListOfActivities({ id: dayId, listOfActivities }) {
  const { selected, setSelected } = useToggle();

  return (
    <PlaceWrapper>
      {listOfActivities.map((place, index) => {
        return (
          <PlaceContainer key={index}>
            <PlaceTitle>
              <SubTitleTypography title={place.name} />
            </PlaceTitle>
            <Place>
              {listOfActivities[index].Activity.map((activity, index) => {
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
            </Place>
          </PlaceContainer>
        );
      })}
    </PlaceWrapper>
  );
}

const PlaceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PlaceContainer = styled.div`
  min-width: 288px;
  flex-direction: column;
`;

const PlaceTitle = styled.p`
  width: 100%;
  height: 36px;
  text-align: center;
`;

const Place = styled.div`
  width: 100%;
  min-height: 390px;
  border: 1px solid #cfcfcf;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px 0px;
`;
