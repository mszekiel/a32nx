import React from 'react';
import { usePower } from '../hooks/usePower';

export const PowerContext = React.createContext({ power: false });

export const PowerProvider = ({ children }: { children: JSX.Element }) => {
  const power = usePower();

  return (
    <PowerContext.Provider value={{ power }}>
      {children}
    </PowerContext.Provider>
  );
};
