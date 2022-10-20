import { useState } from 'react';

export default function useToggle() {
  const [firstOption, setFirstOption] = useState(false);
  const [secondOption, setSecondOption] = useState(false);

  function selectFirstOption() {
    if (firstOption === false && secondOption === false) {
      setFirstOption(!firstOption);
    }
    if (firstOption === true && secondOption === false) {
      setFirstOption(!firstOption);
    }
    if (firstOption === false && secondOption === true) {
      setFirstOption(!firstOption);
      setSecondOption(!secondOption);
    }
  }

  function selectSecondOption() {
    if (firstOption === false && secondOption === false) {
      setSecondOption(!secondOption);
    }
    if (firstOption === false && secondOption === true) {
      setSecondOption(!secondOption);
    }
    if (firstOption === true && secondOption === false) {
      setSecondOption(!secondOption);
      setFirstOption(!firstOption);
    }
  }
  return {
    firstOption,
    secondOption,
    selectFirstOption,
    selectSecondOption,
  };
}
