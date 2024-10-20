export const AUTH_CONFIG = {
  clientId: process.env.CLIENT_ID,
  tenantName: process.env.TENANT_NAME,
  loginScope: process.env.LOGIN_SCOPE,
  policy: process.env.POLICY,
};

const b2cScopes = [
  `https://${AUTH_CONFIG.tenantName}.onmicrosoft.com/${AUTH_CONFIG.loginScope}`,
  'email',
  'openid',
  'profile',
  'offline_access',
];
export const msalConfig = {
  auth: {
    clientId: `${AUTH_CONFIG.clientId}`,
    authority: `https://${AUTH_CONFIG.tenantName}.b2clogin.com/${AUTH_CONFIG.tenantName}.onmicrosoft.com/${AUTH_CONFIG.policy}`,
    knownAuthorities: [`${AUTH_CONFIG.tenantName}.b2clogin.com`],
    redirectUri: '/',
    postLogoutRedirectUri: '/',
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
};
export const loginRequest = {
  scopes: b2cScopes,
  prompt: 'select_account',
};
export const tokenRequest = {
  scopes: b2cScopes,
  forceRefresh: false,
};
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
