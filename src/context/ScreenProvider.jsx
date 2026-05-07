import { useState } from 'react';
import { ScreenContext } from './screen-context';

export function ScreenProvider({ children }) {
  const [screen, setScreen] = useState('home');

  const toggleScreen = (nextScreen) => {
    setScreen(nextScreen);
  };

  return (
    <ScreenContext.Provider value={{ screen, toggleScreen }}>
      {children}
    </ScreenContext.Provider>
  );
}