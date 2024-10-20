'use client';

import { ReactNode } from 'react';
import { Header } from '@/components/layout/header';
import { Stack } from '@mui/material';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack id="_layout" minHeight="100%">
      <Stack id="_middle" display="flex" flexGrow={1}>
        <Header />
        <Stack flexGrow={1}>{children}</Stack>
      </Stack>
    </Stack>
  );
};
