import React from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import ClientLayout from './clientLayout';
import './globals.css';

export const metadata = {
  manifest: "/manifest.json",
  title: 'Blum Cannabis Club',
  description: 'Blun Cannabis Club',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#451F49',
  charSet: 'UTF-8',
  icon: '/favicon.ico',
  keywords: 'Club, cannabis, blum, cannabis recreacional, cannabis medicinal'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content={metadata.viewport} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta charSet={metadata.charSet} />
        <link rel="icon" href={metadata.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="manifest" href={metadata.manifest} />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BFTD765MWQ" strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BFTD765MWQ')`}
        </Script>
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
