'use client';

import { Button } from '@mui/material';
import { handleLogin } from '@/msal/msal';

export const BtnUserSignIn = () => {
  return (
    <Button variant="text" onClick={() => handleLogin('redirect')}>
      login
    </Button>
  );
};
