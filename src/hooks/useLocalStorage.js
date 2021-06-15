import { useState, useEffect } from 'react';

const useLocalStorage = (key, initial) => {
  const item = localStorage.getItem(key);
  const [value, setValue] = useState(item || initial);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
