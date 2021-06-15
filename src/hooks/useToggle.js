import { useState } from 'react';

const useToggle = (initialValue) => {
  const [isToggled, setToggle] = useState(initialValue);

  const toggle = () => setToggle((prev) => !prev);

  return { isToggled, setToggle, toggle };
};

export default useToggle;
