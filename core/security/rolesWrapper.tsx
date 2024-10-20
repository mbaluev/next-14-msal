'use client';

import { getUserClaims, isUserAllowed } from '@/msal/userHelper';
import { ReactNode, useEffect, useState } from 'react';

interface ContainerProps {
  allowedRoles: string[];
  children?: ReactNode;
}

export const RolesWrapper = ({ allowedRoles, children }: ContainerProps) => {
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    const claims = getUserClaims();
    allowedRoles?.forEach((role) => {
      if (!isUserAllowed(role, null, claims)) {
        setShowContent(false);
        return;
      }
      setShowContent(true);
    });
  }, [allowedRoles]);

  return showContent && <>{children}</>;
};
