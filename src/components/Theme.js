import React from 'react';

import useTheme from '../hooks/useTheme';

export default function Theme() {
  const [theme, setTheme] = useTheme();

  return (
    <div>
      <select
        name=""
        id=""
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
