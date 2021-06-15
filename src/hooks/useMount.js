import { useEffect } from 'react';

export const useMount = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useUnmount = (callback) => {
  useEffect(() => {
    return () => {
      callback();
    };
  });
};
