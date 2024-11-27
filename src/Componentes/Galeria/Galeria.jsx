/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import ModalImage from 'react-modal-image'; // Importa react-modal-image

const effects = [
  "hover:scale-105 hover:rotate-2", // Escala y rota
  "hover:scale-105 hover:rotate-4", // Escala y rota
  "hover:scale-110 hover:brightness-125", // Escala y brillo
  "hover:saturate-150", // Saturación
  "hover:rotate-6 hover:scale-105", // Rotación y escala
  "hover:rotate-2 hover:scale-105", // Rotación y escala
  "hover:opacity-75", // Opacidad
  "hover:contrast-150", // Contraste
];

export default function Gallery() {
  const [randomEffects, setRandomEffects] = useState([]);

  const images = [
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732715003/9_gyyvhl.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732716547/10_k2pvni.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732715003/3_lycxg1.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732715003/5_kkzkh9.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732715004/1_uv6aho.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732715002/6_n7cwpt.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732715004/2_tyekvi.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732715002/8_x6pd3w.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1732715003/4_uceo2t.webp"
  ];
  
  const showImages = images.length % 2 === 1 ? images.slice(0, images.length - 1) : images;

  useEffect(() => {
    // Generar un efecto aleatorio para cada imagen
    const effectsForImages = images.map(() => {
      const randomIndex = Math.floor(Math.random() * effects.length);
      return effects[randomIndex];
    });
    setRandomEffects(effectsForImages);
  }, []);

  return (
    <section className="bg-primary flex justify-center">
      <div className="max-w-7xl mx-4 md:mx-10">
        <article className="text-center">
          <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
            <h2 className="text-3xl lg:text-5xl font-aileron text-secondary uppercase mt-16 mb-8 text-center">
              Encuentros Sociales
            </h2>
          </Fade>
        </article>

        {/* Para dispositivos móviles */}
        <article className="grid grid-cols-2 md:hidden gap-4 pb-16 mx-auto">
          {showImages.map((src, index) => (
            <div key={index} className="flex justify-center">
              <ModalImage
                hideZoom={true}
                hideDownload={true}
                small={src} 
                large={src}
                className={`h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform ${randomEffects[index]}`}
                title={`Galeria de imagenes- Imagen N° ${index}`}
                alt={`Galeria de imagenes- Imagen N° ${index}`}
                aria-label={`Galeria de imagenes- Imagen N° ${index}`}
              />
            </div>
          ))}
        </article>

        {/* Para pantallas medianas y grandes */}
        <article className="hidden md:grid grid-cols-3 gap-4 pb-16 mx-auto">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <ModalImage
                hideZoom={true}
                hideDownload={true}
                small={src} 
                large={src}
                className={`h-auto max-w-full rounded-lg transition-transform duration-300 ease-in-out transform ${randomEffects[index]}`}
                title={`Galeria de imagenes- Imagen N° ${index}`}
                alt={`Galeria de imagenes- Imagen N° ${index}`}
                aria-label={`Galeria de imagenes- Imagen N° ${index}`}
              />
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
