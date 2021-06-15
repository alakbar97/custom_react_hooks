import { useMemo, useState } from 'react';

const useHover = () => {
  const [isHovered, setHover] = useState(false);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setHover(true),
      onMouseLeave: () => setHover(false),
    };
  }, []);

  return [isHovered, bind];
};

export default useHover;
