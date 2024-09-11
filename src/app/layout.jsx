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
  themeColor: '#0c343c',
  charSet: 'UTF-8',
  icon: '/favicon.ico',
  keywords: 'Club, cannabis, blum, cannabis recreacional, cannabis medicinal'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content='width=device-width, initial-scale=1' />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta charSet={metadata.charSet} />
        <link rel="icon" href='/favicon.ico' sizes="any" type="image/x-icon"/>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="manifest" href={metadata.manifest} />
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400&display=swap" rel="stylesheet"/>

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
