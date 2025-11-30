import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { MantineProvider } from '@mantine/core';
import { defaultTheme, type DesignTokens, type MainTheme } from './tokens';
import { createMantineThemeFromTokens } from './mantineTheme';

export type Mode = 'light' | 'dark';

type DSContextValue = {
  mode: Mode;
  tokens: DesignTokens;
  setMode: (mode: Mode) => void;
};

const DSContext = createContext<DSContextValue | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useDesignSystem() {
  const ctx = useContext(DSContext);
  if (!ctx) {
    throw new Error('useDesignSystem must be used inside <DSProvider>');
  }
  return ctx;
}

export type DSProviderProps = {
  theme?: MainTheme;
  mode?: Mode;
  children: ReactNode;
};

export function DSProvider({
  theme = defaultTheme,
  mode = 'light',
  children,
}: DSProviderProps) {
  const [currentMode, setCurrentMode] = useState<Mode>(mode);

  const tokens = useMemo(
    () => (currentMode === 'light' ? theme.light : theme.dark),
    [currentMode, theme],
  );

  const mantineTheme = useMemo(
    () => createMantineThemeFromTokens(tokens),
    [tokens],
  );

  const value: DSContextValue = {
    mode: currentMode,
    tokens,
    setMode: setCurrentMode,
  };

  return (
    <DSContext.Provider value={value}>
      <MantineProvider theme={mantineTheme} defaultColorScheme={currentMode}>
        {children}
      </MantineProvider>
    </DSContext.Provider>
  );
}
