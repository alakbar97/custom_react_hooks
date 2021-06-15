import React from 'react';

import useInc from '../hooks/useInc';

export default function Inc() {
  const [value, { inc, dec, reset }] = useInc({
    maxValue: 10,
    minValue: 0,
    initialValue: 5,
  });

  return (
    <div>
      <button onClick={dec}>-</button>
      {value}
      <button onClick={inc}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
