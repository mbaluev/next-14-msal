import { useTheme } from 'next-themes';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useEffect, useState } from 'react';

export function BtnTheme() {
  const { setTheme, theme } = useTheme();
  const handleChangeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const [mode, setMode] = useState<string | undefined>();
  useEffect(() => setMode(theme), [theme]);

  return (
    <IconButton onClick={handleChangeTheme} className="flex-grow-0">
      {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
