'use client';

import { useTheme } from 'next-themes';
import { ThemeProvider } from '@mui/system';
import { themeLight, themeDark } from '@/core/theme/mui';
import { ReactNode, useEffect, useState } from 'react';

export const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const [currTheme, setCurrTheme] = useState<any>();
  useEffect(() => {
    if (theme === 'dark') setCurrTheme(themeDark);
    if (theme === 'light') setCurrTheme(themeLight);
  }, [theme]);
  return <ThemeProvider theme={currTheme}>{children}</ThemeProvider>;
};
