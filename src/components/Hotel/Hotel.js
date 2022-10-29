import React from 'react';
import SubTitleTypography from '../SubTitleTypography';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import useToggle from '../../hooks/useToggle';

import { HotelWrapper } from './HotelWrapper';
import HotelCard from './HotelCard';
import useHotel from '../../hooks/api/useHotel';

export default function Hotel() {
  const { selected, setSelected } = useToggle();
  const { hotels } = useHotel();
  const [listOfHotels, setListOfHotels] = React.useState([]);

  const renderHotel = async() => {
    try {
      await setListOfHotels([...hotels]);
    } catch (err) {
      toast('Não foi possível carregar os hotéis');
    }
  };

  React.useEffect(() => {
    if(hotels) {
      renderHotel();
    }
  }, [hotels]);

  return (
    <>
      <SubTitleTypography title={'Primeiro, escolha seu hotel'} />
      <HotelWrapper>
        <HotelList>
          {listOfHotels.map((hotel, index) => {
            return (
              <HotelCard
                key={index}
                name={hotel.name}
                image={hotel.imageUrl}
                roomTypes={hotel.roomTypes}
                vacancies={hotel.vacancies}
                isSelected={selected.name === hotel.name}
                callback={setSelected}
              />
            );
          })}
        </HotelList>
        {selected.name ? <SubTitleTypography title={'Ótima pedida! Agora escolha seu quarto:'} /> : <></>}
      </HotelWrapper>
    </>
  );
}

const HotelList = styled.div`
  display: flex;
  margin-bottom: 20px;

`;
