'use client'
import React from 'react';
import Gallery from 'react-image-gallery';
import Link from 'next/link';
import { imagesHidroponico } from '@/app/Constants/userinfo';
import { Fade } from 'react-awesome-reveal';

function CarruselImages() {
  return (
    <section id="cultivoHidroponico" className="my-16 scroll-mt-20 lg:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <Fade direction={"down"} delay={800} cascade damping={1e-1} triggerOnce={true}>
          <h2 className="text-3xl lg:text-5xl font-aileron text-secondary uppercase mt-16 mb-8 text-center">Cultivo Hidropónico</h2>
        </Fade>
        <article className="flex flex-col w-full px-8 xl:flex-row mb-8">
          <p className="text-xl">Utilizamos el avanzado método de cultivo hidropónico, asegurando un entorno óptimo para el crecimiento de plantas de alta calidad.</p>
          <Link href="/cultivo/hidroponico" title='Link a cultivo hidropónico'>
            <button className="mt-4 xl:mt-0 xl:ml-4 w-20 text-sm border px-2 py-1 rounded-md hover:translate-y-[1px] hover:bg-secondary hover:text-primary hover:font-semibold hover:border-secondary">Ver más</button>
          </Link>
        </article>
        <article className="max-w-7xl mx-auto mt-8 md:p-8 ">
          <Gallery items={imagesHidroponico} showFullscreenButton={false} showPlayButton={false} slideDuration={450}/>
        </article>
      </div>
    </section>
  );
}

export default CarruselImages;
