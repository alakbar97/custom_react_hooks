import React from 'react';

import useHover from '../hooks/useHover';
import useWindowWidth from '../hooks/useWindowWidth';
import useMeasure from '../hooks/useMeasure';

import { Card } from '../Elements';

import green from '../green.png';

export default function Hover() {
  const [isHovered, bind] = useHover(false);
  const width = useWindowWidth();
  const [{ ref }, bounds] = useMeasure();

  console.log('bounds', bounds);

  if (width < 400) return null;

  return (
    <div style={{ marginBottom: 15, marginTop: 15 }}>
      <Card
        ref={ref}
        {...bind}
        style={{ background: isHovered ? 'var(--green)' : 'var(--purp)' }}
      >
        <h3>Some card</h3>
        <img src={green} alt="text" />
      </Card>
    </div>
  );
}
