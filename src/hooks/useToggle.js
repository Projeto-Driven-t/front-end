import { useState } from 'react';

export default function useToggle() {
  const [selected, setSelected] = useState({});

  return {
    selected,
    setSelected
  };
}
