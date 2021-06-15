import React from 'react';

import useCookie from '../hooks/useCookie';

export default function Cookie() {
  const [cookie, setCookie] = useCookie({ key: 'test' });

  return (
    <div>
      <h1>{cookie || ''}</h1>
      <input value={cookie} onChange={(e) => setCookie(e.target.value)} />
    </div>
  );
}
