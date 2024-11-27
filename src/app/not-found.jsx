/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Notfound() {
  return (
    <div className="bg-primary flex flex-col justify-center h-screen items-center text-center p-4">
        <img src="/Logo/LogoBlumTransparente.png" alt="Logo" loading='lazy' width={500} height={500} title='Logo de Blum Club'/>
        <div>
          <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">Página no encontrada</p>
        </div>
        <Link href="/" title='volver a pagina principal'>
          <p className="text-secondary hover:text-blue-700 text-xl">Volver a la página principal</p>
        </Link>
    </div>
  );
}
