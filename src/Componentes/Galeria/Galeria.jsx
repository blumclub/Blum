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
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/2_ouoygy.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/7_relwn9.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/8_t79umg.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726162508/10_gjh3q6.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/5_vaxghv.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/6_oo4nib.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/3_ki9gn1.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/7_relwn9.webp",
    "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/8_t79umg.webp"
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
              />
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
