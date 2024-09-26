import './global.css';

import { GeistSans } from 'geist/font/sans';
import { I18nProvider } from 'fumadocs-ui/i18n';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';
import { translations } from './layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='pl' className={GeistSans.className} suppressHydrationWarning>
      <body>
        <I18nProvider locale='pl' translations={translations}>
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
