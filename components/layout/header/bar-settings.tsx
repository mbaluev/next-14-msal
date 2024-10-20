'use client';

import { BtnTheme } from '@/components/layout/header/btn-theme';
import { BtnUser } from '@/components/layout/header/btn-user';
import { Stack } from '@mui/material';

export const BarSettings = () => {
  return (
    <Stack direction="row" spacing={2}>
      <BtnTheme />
      <BtnUser />
    </Stack>
  );
};
