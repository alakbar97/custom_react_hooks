import { useState } from 'react';

const useInc = ({ maxValue = 10000, minValue = -10000, initialValue = 0 }) => {
  const [value, setValue] = useState(initialValue);

  const inc = () => {
    setValue((prev) => (prev >= maxValue ? maxValue : prev + 1));
  };

  const dec = () => {
    setValue((prev) => (prev <= minValue ? minValue : prev - 1));
  };

  const reset = () => setValue(initialValue);

  return [value, { inc, dec, reset }];
};

export default useInc;
