import React from 'react';

import { useMount, useUnmount } from '../hooks/useMount';
import useToggle from '../hooks/useToggle';

export const Unmount = () => {
  useMount(() => {
    console.log('It mounted !');
  });

  useUnmount(() => {
    console.log('It unmounted !');
  });

  return <div>Unmount</div>;
};

export default function Mount() {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <Unmount />}
    </div>
  );
}
