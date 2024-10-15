import React from 'react';
import Banner from '../Componentes/Banner/Banner';
import Nosotros from '../Componentes/Nosotros/Nosotros';
import Gallery from '../Componentes/Galeria/Galeria';
import Reprocan from '../Componentes/Reprocan/Reprocan';
import PostInstagram from '../Componentes/PostInstagram/PostInstagram';
import Consultorio from '../Componentes/Consultorio/Consultorio';
import Hidroponico from '../Componentes/Hidroponico/Hidroponico';
import Catalogo from '../Componentes/Catalogo/Catalogo';
import PreguntasFrecuentes from '../Componentes/PreguntasFrecuentas/PreguntasFrecuentas';


export default function Home() {

  return (
      <main>
        <Banner />
        <Nosotros />
        <PostInstagram />
        <Gallery />
        <Consultorio />
        <Hidroponico />
        <Catalogo/>
        <Reprocan /> 
        <PreguntasFrecuentes />
      </main>
  );
}
