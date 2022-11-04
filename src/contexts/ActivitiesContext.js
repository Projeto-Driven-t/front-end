import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const ActivitiesContext = createContext();
const useActivitiesContext = () => useContext(ActivitiesContext);

export default useActivitiesContext;

export function ActivitiesProvider({ children }) {
  const [activitiesData, setActivitiesData] = useState({});
  const [render, setRender] = useState(false);
  const [activity, setActivity] = useState(null);

  return (
    <ActivitiesContext.Provider
      value={{ activitiesData, setActivitiesData, render, setRender, activity, setActivity }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}
