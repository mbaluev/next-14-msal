'use client';

import { AccountInfo } from '@azure/msal-browser';
import { msalInstance } from './msal';

export function getLoggedInUser(): AccountInfo | null {
  return msalInstance?.getActiveAccount();
}

export function getUserClaims(account?: AccountInfo | null): string[] {
  let userAccount = account;
  if (!userAccount) userAccount = getLoggedInUser();
  return (userAccount?.idTokenClaims?.roles as string[] | undefined) ?? [];
}

export function isUserAllowed(
  requiredRole: string,
  account?: AccountInfo | null,
  claims?: string[] | null
): boolean {
  let userClaims = claims;
  if (!userClaims) userClaims = getUserClaims(account);
  return userClaims ? userClaims.includes(requiredRole) : false;
}
