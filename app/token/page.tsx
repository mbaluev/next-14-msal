'use client';

import { getToken } from '@/msal/msal';
import { Button, Stack, Typography } from '@mui/material';

export default function TokenPage() {
  const handleToken = async () => {
    await getToken().then((response) => {
      alert(`token is ${response}`);
    });
  };
  return (
    <Stack px={2} spacing={2} alignItems="flex-start">
      <Typography>
        You should see an alert of a token generated based on your msal configurations
      </Typography>
      <Button onClick={handleToken}>get token</Button>
    </Stack>
  );
}
