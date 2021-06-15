import React from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

export default function Local() {
  const [value, setValue] = useLocalStorage('test', 'value');

  return (
    <div>
      <h1>{value || ''}</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
