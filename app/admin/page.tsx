'use client';

import { getLoggedInUser, isUserAllowed } from '@/msal/userHelper';
import { redirect } from 'next/navigation';
import { Stack, Typography } from '@mui/material';

export default function AdminPage() {
  const user = getLoggedInUser();
  const adminClaim = `${process.env.ADMIN_ROLE}`;
  if (!isUserAllowed(adminClaim, user)) redirect('/');
  return (
    <Stack px={2}>
      <Typography>You are an admin, and in an admin-only page now!</Typography>
    </Stack>
  );
}
