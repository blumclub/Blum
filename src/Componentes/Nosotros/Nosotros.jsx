import React from "react";

export default function Nosotros() {

  return (
    <section id="nosotros" className="relative z-10 bg-primary"> 
      <article className="p-4 max-w-[780px] mx-auto pb-16 md:pb-24 xl:pb-36 ">
        <h1 className="text-secondary text-3xl m-4 items-center text-center font-roboto">¡Bienvenidos al Primer Club Asociación Civil sin fines de lucro de Cannabis Medicinal en la localidad de Bernal, Buenos Aires, Argentina!</h1>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center text-start md:text-start md:items-start">
            <p className="text-white text-lg indent-6">En nuestro compromiso con la salud y el bienestar, nuestra misión es liderar la revolución del cannabis medicinal en Bernal, Argentina. Nos dedicamos a investigar, educar y acompañar a nuestros pacientes y la comunidad en general en el uso responsable y terapéutico del cannabis. </p>
            <br />
            <p className="text-white text-lg indent-6">Buscamos proporcionar alternativas de tratamiento efectivas y de alta calidad, marcando la pauta como el primer Club Asociación Civil sin fines de lucro de Cannabis Medicinal en la localidad. Partimos del marco legal de la Ley de Cannabis Medicinal (Ley N°27.350), llevando adelante nuestras actividades bajo los estándares de la misma.</p>
          </div>
          <p className="hidden md:block md:text-9xl place-self-center text-transparent leading-none font-oxanium tracking-wider bg-bgTitle bg-clip-text bg-fixed drop-shadow-secondary font-black rounded-sm bg-right md:bg-contain lg:bg-left">
            Blüm
          </p>
        </div>
      </article>
      {/* Curva ondulada SVG */}
      <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 w-full h-auto z-0 -bottom-8 xs:-bottom-10 md:-bottom-20 lg:-bottom-24 xl:-bottom-36 xxl:-bottom-52" style={{transform: 'scaleY(-1)' }}>
        <path d="M0,64L60,72C120,80,240,96,360,112C480,128,600,144,720,138.7C840,133,960,107,1080,96C1200,85,1320,93,1380,96L1440,100L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z" fill="#0c343c" stroke="none" />
      </svg>
    </section>
  );
}
