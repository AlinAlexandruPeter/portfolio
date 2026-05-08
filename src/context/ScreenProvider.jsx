import { useState } from 'react';
import { ScreenContext } from './screen-context';

export function ScreenProvider({ children }) {
  const [screen, setScreen] = useState('home');
  const [direction, setDirection] = useState(1)
  
  const toggleScreen = (nextScreen, navDirection = 1) => {
    setDirection(navDirection);
    setScreen(nextScreen);
  };

  return (
    <ScreenContext.Provider value={{ screen, toggleScreen, direction }}>
      {children}
    </ScreenContext.Provider>
  );
}