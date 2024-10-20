/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    TENANT_NAME: process.env.TENANT_NAME,
    LOGIN_SCOPE: process.env.LOGIN_SCOPE,
    POLICY: process.env.POLICY,
    ADMIN_ROLE: process.env.ADMIN_ROLE,
  },
};

module.exports = nextConfig;
