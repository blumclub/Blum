'use client'
import React from 'react';
import Gallery from 'react-image-gallery';
import Link from 'next/link';
import { imagesHidroponico } from '@/app/Constants/userinfo';



function Hidroponico() {

  return (
    <section id="cultivoHidroponico" className="mb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-aileron text-secondary uppercase mt-16 mb-8 text-center">Cultivo Hidroponico</h2>
        <article className="flex flex-col w-full px-8 xl:flex-row">
          <p className="text-xl">Utilizamos el avanzado método de cultivo hidropónico, asegurando un entorno óptimo para el crecimiento de plantas de alta calidad.</p>
          <Link href={'/cultivo/hidroponico'}>
            <button className="text-center mt-4 xl:mt-0 xl:mx-4 w-20 text-sm border px-2 py-1 rounded-md float-end xl:align-middle hover:translate-y-[1px] hover:bg-secondary hover:text-primary hover:font-semibold hover:border-secondary">Ver más</button>
          </Link>
        </article>
        <article className="grid gap-4 max-w-7xl mx-auto mt-8 md:p-8">
            <Gallery items={imagesHidroponico} showFullscreenButton={false} showPlayButton={false} />
        </article>
      </div>
    </section>
  );
}

export default Hidroponico;
