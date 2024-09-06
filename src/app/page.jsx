import React from 'react';
import Banner from '../Componentes/Banner/Banner';


export default function Home() {

  return (
    <>
      <a href="#locales" className="skip-link absolute left-0 bg-gray-900 text-white p-2 rounded-md text-base font-medium -top-10 focus:top-0 focus:z-50">
        Saltar al contenido principal
      </a>
      <main>
        <Banner />
      </main>
    </>
  );
}
