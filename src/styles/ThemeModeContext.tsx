import { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeMode = 'editorial' | 'modern' | 'academic';

interface ThemeModeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('editorial');

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};
