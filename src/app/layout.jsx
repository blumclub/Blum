import React from 'react';
import Script from 'next/script';
//import { Analytics } from '@vercel/analytics/react';
import ClientLayout from './clientLayout';
import './globals.css';

export const metadata = {
  manifest: "/manifest.json",
  title: 'Blum Club - cultivo de Cannabis Medicinal - Marihuana',
  description: 'Blun es un club de cultivo de Cannabis medicinal, ubicado en Bernal y en CABA Buenos Aires Argentina. Contamos con un consultorio medico para asesoramiento sobre la marihuana medicinal. Utilizamos metodos de cultivo Hidroponico para otorgar el mejor producto. Agenda una entrevista con el Dr. Tomás León.',
  charSet: 'UTF-8',
  icon: '/favicon.ico',
  keywords: 'Club, cannabis, blum, cannabis recreacional, cannabis medicinal, bernal, buenos aires, argentina',
  robots: '/robots.txt',
  publisher: 'Blum Club - cultivo de Cannabis Medicinal - Marihuana',
  ogImage: '/Logo/LogoBlumTransparente.png',
  authors: [{ name: 'Gonzalo Torres Grau', url: 'https://gonzalotorresgrau.com' }],
  openGraph: {
    title: 'Blum Club - cultivo de Cannabis Medicinal - Marihuana',
    description: "Blun es un club de cultivo de Cannabis medicinal, ubicado en Bernal y en CABA Buenos Aires Argentina. Contamos con un consultorio medico para asesoramiento sobre la marihuana medicinal. Utilizamos metodos de cultivo Hidroponico para otorgar el mejor producto. Agenda una entrevista con el Dr. Tomás León.",
    type: 'website',
    url: 'https://blumclub.com.ar/',
    image: 'https://blumclub.com.ar/Logo/LogoBlumTransparente.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content='#0c343c' />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta charSet={metadata.charSet} />
        <link rel="icon" href='/favicon.ico' sizes="any" type="image/x-icon"/>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.image} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="manifest" href={metadata.manifest} />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400&display=swap" as="style" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://blumclub.com.ar/" />
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400&display=swap" rel="stylesheet"/>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BFTD765MWQ" strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BFTD765MWQ')`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Blum Club - cultivo de Cannabis Medicinal - Marihuana",
              "description": "Blun es un club de cultivo de Cannabis medicinal, ubicado en Bernal y en CABA Buenos Aires Argentina. Contamos con un consultorio medico para asesoramiento sobre la marihuana medicinal. Utilizamos metodos de cultivo Hidroponico para otorgar el mejor producto. Agenda una entrevista con el Dr. Tomás León.",
              "image": "https://blumclub.com.ar/Logo/LogoBlumTransparente.png",
              "logo": "https://blumclub.com.ar/Logo/LogoBlumTransparente.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenida San Martin",
                "addressLocality": "Quilmes",
                "addressRegion": "Bernal",
                "addressCountry": "Argentina"
              },
              "telephone": "+541162574919",
              "url": "https://blumclub.com.ar/",
              "sameAs": [
                "https://www.instagram.com/blum.club/"
              ]
            }),
          }}
        />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
