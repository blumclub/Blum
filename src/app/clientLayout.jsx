"use client";

import React, { Suspense } from 'react';
// import Footer from '../components/Footer/Footer';
import { usePathname } from 'next/navigation';
import Loading from '../Componentes/Loading/Loading';
import ButtonWsp from '../Componentes/Socials/ButtonWsp';
import Navbar from '../Componentes/Navbar/Navbar';
import Footer from '../Componentes/Footer/Footer';

export default function ClientLayout({ children }) {
  const path = usePathname() || "";
  const routesSinNav = ['/Login', '/admin'];
  const hideLayout = routesSinNav.includes(path);

  return (
    <>
      {!hideLayout && (
        <nav className=''>
          <Suspense fallback={<Loading />}>
            <Navbar />
          </Suspense>
        </nav>
      )}
      {children}
      {!hideLayout && (
        <footer>
          <Footer /> 
          <ButtonWsp contact={'1162574919'} />
        </footer>
      )}
    </>
  );
}
