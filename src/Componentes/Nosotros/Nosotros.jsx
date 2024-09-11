import React from "react";

export default function Nosotros() {

  return (
    <section id="nosotros" className="relative z-10 bg-primary"> 
      <article className="p-4 max-w-[780px] mx-auto mb-8 pb-8 md:pb-24 xl:pb-36 ">

        <h1 className="text-secondary text-3xl m-4 items-center text-center font-roboto">¡Bienvenidos al Primer Club Asociación Civil sin fines de lucro de Cannabis Medicinal en la localidad de Bernal, Buenos Aires, Argentina!</h1>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center text-start md:text-start md:items-start">
            <p className="text-white text-lg indent-6">En nuestro compromiso con la salud y el bienestar, nuestra misión es liderar la revolución del cannabis medicinal en Bernal, Argentina. Nos dedicamos a investigar, educar y acompañar a nuestros pacientes y la comunidad en general en el uso responsable y terapéutico del cannabis. </p>
            <br />
            <p className="text-white text-lg indent-6">Buscamos proporcionar alternativas de tratamiento efectivas y de alta calidad, marcando la pauta como el primer Club Asociación Civil sin fines de lucro de Cannabis Medicinal en la localidad. Partimos del marco legal de la Ley de Cannabis Medicinal (Ley N°27.350), llevando adelante nuestras actividades bajo los estándares de la misma.</p>
          </div>
          <p className="hidden md:block md:text-9xl place-self-center text-transparent leading-none font-oxanium tracking-wider font-bold bg-bgTitle bg-clip-text bg-repeat-y  drop-shadow-secondary bg-blend-luminosity">
            <strong>Blüm</strong>
          </p>
        </div>
      </article>
      
      {/* Curva ondulada SVG */}
      <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-30px] md:bottom-[-35px] left-0 w-full h-auto">
        <path d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,213.3C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="#E99006" />
      </svg>
    </section>
  );
}
