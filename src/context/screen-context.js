import { createContext, useContext } from 'react';

export const ScreenContext = createContext();

export function useScreen() {
  const context = useContext(ScreenContext);
  if (context === undefined) {
    throw new Error('useScreen must be used within a ScreenProvider');
  }
  return context;
}