'use client';

import { Button } from '@mui/material';
import { handleLogout } from '@/msal/msal';

export const BtnUserSignOut = () => {
  return (
    <Button variant="text" onClick={() => handleLogout('redirect')}>
      logout
    </Button>
  );
};
