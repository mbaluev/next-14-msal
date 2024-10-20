'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { Button, Stack } from '@mui/material';
import { useIsAuthenticated } from '@azure/msal-react';

export const BarNav = () => {
  const pathname = usePathname();
  const isAuth = useIsAuthenticated();
  return (
    <Stack direction="row" spacing={2}>
      {isAuth && (
        <Fragment>
          <Link href="/" passHref>
            <Button variant={pathname === '/' ? 'contained' : 'text'}>home</Button>
          </Link>
          <Link href="/admin" passHref>
            <Button variant={pathname === '/admin' ? 'contained' : 'text'}>admin</Button>
          </Link>
          <Link href="/token" passHref>
            <Button variant={pathname === '/token' ? 'contained' : 'text'}>token</Button>
          </Link>
        </Fragment>
      )}
    </Stack>
  );
};
