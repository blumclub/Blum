'use client'
import { useState, useEffect } from 'react';


const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    // "https://res.cloudinary.com/deueso3sr/image/upload/v1725643288/4_yhe8pc.jpg",
    // "https://res.cloudinary.com/deueso3sr/image/upload/v1725643288/3_hl4a2i.jpg",
    // "https://res.cloudinary.com/deueso3sr/image/upload/v1725643288/2_kpxnaj.jpg",
    "/BG/perro.webp"
  ];

  const SlidesMovil = [
    // "https://res.cloudinary.com/deueso3sr/image/upload/v1725643232/2m_jsr3gb.jpg",
    // "https://res.cloudinary.com/deueso3sr/image/upload/v1725643232/4m_mo1so8.jpg",
    // "https://res.cloudinary.com/deueso3sr/image/upload/v1725643232/3m_emq9fj.jpg",
    "/BG/perro.webp"
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (isMobile ? SlidesMovil.length : slides.length));
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, slides.length, SlidesMovil.length]);

  const currentSlides = isMobile ? SlidesMovil : slides;

  return (
    <section id='inicio' className="bg-black">
      <div className="relative w-full">
        <div className="relative min-h-screen overflow-hidden rounded-lg md:h-96">
          {currentSlides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
              <img src={slide} className="block w-full h-full object-cover opacity-30" alt={`Slide ${index + 1}`} aria-label={`Imagen del Local ${index + 1}`}/>
            </div>
          ))}

          {/* Text overlay */}
          <div className="absolute inset-0 flex justify-center items-center bottom-16 text-white z-10">
            <div className="text-center">
              <p className="text-[40px] md:text-[62px] text-secondary leading-none font-oxanium tracking-wider"><streong>Blüm</streong></p>
              <p className="text-[20px] md:text-[22px] text-secondary tracking-wide text-customBeige  font-oxanium font-light">TU PAUSA EN MEDIO DEL CAOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
