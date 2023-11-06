'use client';

import './globals.css';
// import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ReactQueryProvider from '@/lib/providers/ReactQueryProvider';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <CookiesProvider>
            <ReactQueryProvider>
              <Header />
              {children}
              {/* <Footer /> */}
            </ReactQueryProvider>
          </CookiesProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
