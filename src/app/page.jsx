import React from 'react';
import Banner from '../Componentes/Banner/Banner';
import Nosotros from '../Componentes/Nosotros/Nosotros';
import Gallery from '../Componentes/Galeria/Galeria';
import Reprocam from '../Componentes/Reprocam/Reprocam';
import Link from 'next/link';
import PostInstagram from '@/Componentes/PostInstagram/PostInstagram';
import Consultorio from '@/Componentes/Consultorio/Consultorio';


export default function Home() {

  return (
    <>
      {/* <Link href="#locales" className="skip-link absolute left-0 bg-gray-900 text-white p-2 rounded-md text-base font-medium -top-10 focus:top-0 focus:z-50">
        Saltar a principal
      </Link> */}
      <main>
        <Banner />
        <Nosotros />
        {/* <PostInstagram /> */}
        <Gallery />
        <Consultorio />
        <Reprocam /> 
      </main>
    </>
  );
}
