import React from 'react';

import useScript from '../hooks/useScript';

export default function Script() {
  const [isLoaded, isError] = useScript(
    'https://www.google.com/recaptcha/api.js'
  );

  console.log(isLoaded, isError);

  if (!isLoaded) return null;

  return (
    <div>
      <h3>Script</h3>
    </div>
  );
}
