import React from 'react';
import Banner from '../Componentes/Banner/Banner';
import Nosotros from '../Componentes/Nosotros/Nosotros';
import Gallery from '../Componentes/Galeria/Galeria';
import Reprocan from '../Componentes/Reprocan/Reprocan';
<<<<<<< HEAD
import PostInstagram from '../Componentes/PostInstagram/PostInstagram';
=======
// import PostInstagram from '../Componentes/PostInstagram/PostInstagram';
>>>>>>> 5351c4b20adf37345608a7db2ee748f6ab944655
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
        <PostInstagram />
        <Catalogo/>
        {/* <Comentarios />  */}
        <Reprocan />
        <PreguntasFrecuentes />
      </main>
  );
}
