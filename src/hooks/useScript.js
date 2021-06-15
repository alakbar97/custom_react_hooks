import { useState, useEffect } from 'react';

let cached = [];

const useScript = (src) => {
  const [status, setStatus] = useState({ loaded: false, error: false });

  useEffect(() => {
    if (cached.includes(src)) return setStatus({ loaded: true, error: false });

    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    cached.push(src);

    const onLoad = () => setStatus({ loaded: true, error: false });

    const onError = () => {
      const i = cached.indexOf(src);

      if (i) cached.splice(i, 1);

      script.remove();

      setStatus({ loaded: true, error: true });
    };

    script.addEventListener('load', onLoad);

    script.addEventListener('error', onError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', onLoad);

      script.removeEventListener('error', onError);
    };
  }, [src]);

  return [status.loaded, status.error];
};

export default useScript;
