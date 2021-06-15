import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useCookie = ({ key }) => {
  const initial = Cookies.get(key);

  const [cookie, setStateCookie] = useState(initial);

  useEffect(() => {
    Cookies.set(key, cookie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookie]);

  return [cookie, setStateCookie];
};

export default useCookie;
