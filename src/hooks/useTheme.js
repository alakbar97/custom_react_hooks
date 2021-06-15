import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
