import React from 'react';
import Banner from '../Componentes/Banner/Banner';
import Nosotros from '../Componentes/Nosotros/Nosotros';
import Gallery from '../Componentes/Galeria/Galeria';
import Reprocan from '../Componentes/Reprocan/Reprocan';
import PostInstagram from '../Componentes/PostInstagram/PostInstagram';
import Consultorio from '../Componentes/Consultorio/Consultorio';
import CarruselImages from '../Componentes/Hidroponico/CarruselImages';
import Catalogo from '../Componentes/Catalogo/Catalogo';
import PreguntasFrecuentes from '../Componentes/PreguntasFrecuentas/PreguntasFrecuentas';
// import { ProductCarousel } from '../Componentes/ProductCard/ProductCarousel';
// import Comentarios from '@/Componentes/Comentarios/Comentarios';


export default function Home() {

  return (
      <main>
        <Banner />
        <Nosotros />
        <Gallery />
        <Consultorio />
        <CarruselImages />
        <PostInstagram />
        <Catalogo/>
        {/* <ProductCarousel />  */}
        {/* <Comentarios />  */}
        <Reprocan />
        <PreguntasFrecuentes />
      </main>
  );
}
