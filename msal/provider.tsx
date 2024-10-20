'use client';

import { ReactNode, useEffect } from 'react';
import { initializeMsal, msalInstance } from '@/msal/msal';
import { MsalProvider } from '@azure/msal-react';

export const ProviderMsal = ({ children }: { children: ReactNode }) => {
  useEffect(() => initializeMsal(), []);
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};
