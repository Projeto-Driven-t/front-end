import { useState } from 'react';
import { createContext } from 'react';

const EventModeContext = createContext();
export default EventModeContext;

export function EventModeProvider({ children }) {
  const [eventData, setEventData] = useState(false);

  return (
    <EventModeContext.Provider value={{ eventData, setEventData }}>
        {children}
    </EventModeContext.Provider>
  );
}
