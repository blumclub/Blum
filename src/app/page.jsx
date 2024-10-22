import React from 'react';
import Banner from '../Componentes/Banner/Banner';
import Nosotros from '../Componentes/Nosotros/Nosotros';
import Gallery from '../Componentes/Galeria/Galeria';
import Reprocan from '../Componentes/Reprocan/Reprocan';
// import PostInstagram from '../Componentes/PostInstagram/PostInstagram';
import Consultorio from '../Componentes/Consultorio/Consultorio';
import Hidroponico from '../Componentes/Hidroponico/Hidroponico';
import Catalogo from '../Componentes/Catalogo/Catalogo';
import PreguntasFrecuentes from '../Componentes/PreguntasFrecuentas/PreguntasFrecuentas';
// import Comentarios from '@/Componentes/Comentarios/Comentarios';


export default function Home() {

  return (
      <main>
        <Banner />
        <Nosotros />
        <Gallery />
        <Consultorio />
        <Hidroponico />
        {/* <PostInstagram /> */}
        <Catalogo/>
        {/* <Comentarios />  */}
        <Reprocan />
        <PreguntasFrecuentes />
      </main>
  );
}
