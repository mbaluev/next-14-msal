'use client';

import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { BtnUserSignIn } from '@/components/layout/header/btn-user-sign-in';
import { BtnUserSignOut } from '@/components/layout/header/btn-user-sign-out';

export const BtnUser = () => {
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  if (isAuthenticated) {
    return <BtnUserSignOut />;
  } else if (inProgress !== InteractionStatus.HandleRedirect) {
    return <BtnUserSignIn />;
  } else {
    return null;
  }
};
