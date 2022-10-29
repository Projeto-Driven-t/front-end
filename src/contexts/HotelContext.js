import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const HotelContext = createContext();
const useHotelContext = () => useContext(HotelContext);

export default useHotelContext;

export function HotelProvider({ children }) {
  const [hotelData, setHotelData] = useState({});
  const [render, setRender] = useState(false);
  const [hotel, setHotel] = useState(null);

  return (
    <HotelContext.Provider
      value={{ hotelData, setHotelData, render, setRender, hotel, setHotel }}
    >
      {children}
    </HotelContext.Provider>
  );
} 
