import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const EventModeContext = createContext();
const useEventModeContext = () => useContext(EventModeContext);

export default useEventModeContext;

export function EventModeProvider({ children }) {
  const [eventData, setEventData] = useState({});

  return (
    <EventModeContext.Provider value={{ eventData, setEventData }}>
      {children}
    </EventModeContext.Provider>
  );
}
