import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { Open_Sans } from 'next/font/google';
import { ProviderMsal } from '@/msal/provider';
import { Layout } from '@/components/layout/layout';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';
import theme from '@/core/theme/mui';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next msal',
  description: 'nextjs and msal integration',
  icons: '/favicon.ico',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" style={{ height: '100%' }} suppressHydrationWarning>
      <body className={font.className} style={{ height: '100%', margin: 0 }}>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          <MuiThemeProvider theme={theme}>
            <AppRouterCacheProvider>
              <ProviderMsal>
                <Layout>{children}</Layout>
              </ProviderMsal>
            </AppRouterCacheProvider>
          </MuiThemeProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
