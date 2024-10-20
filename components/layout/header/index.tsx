'use client';

import { BarNav } from '@/components/layout/header/bar-nav';
import { BarSettings } from '@/components/layout/header/bar-settings';
import { Stack } from '@mui/material';

export const Header = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      zIndex={10}
      position="sticky"
      top={0}
    >
      <BarNav />
      <BarSettings />
    </Stack>
  );
};
