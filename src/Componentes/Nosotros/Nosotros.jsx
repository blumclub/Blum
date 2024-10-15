import React from "react";

export default function Nosotros() {

  return (
    <section id="ElClub" className="relative z-10 bg-primary py-12 scroll-mt-10 lg:scroll-mt-20"> 
      <article className="px-4 max-w-5xl mx-auto">
        <h1 className="text-secondary text-3xl m-4 items-center text-center font-roboto">¡Bienvenidos al Primer Club Asociación Civil sin fines de lucro de Cannabis Medicinal en la localidad de Bernal, Buenos Aires, Argentina!</h1>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center text-start md:text-start md:items-start">
            <p className="text-white text-lg indent-6">En nuestro compromiso con la salud y el bienestar, nuestra misión es liderar la revolución del cannabis medicinal en Bernal, Argentina. Nos dedicamos a investigar, educar y acompañar a nuestros pacientes y la comunidad en general en el uso responsable y terapéutico del cannabis. </p>
            <br />
            <p className="text-white text-lg indent-6">Buscamos proporcionar alternativas de tratamiento efectivas y de alta calidad, marcando la pauta como el primer Club Asociación Civil sin fines de lucro de Cannabis Medicinal en la localidad. Partimos del marco legal de la Ley de Cannabis Medicinal (Ley N°27.350), llevando adelante nuestras actividades bajo los estándares de la misma.</p>
          </div>
          <h2 className="hidden md:block md:text-9xl place-self-center text-transparent leading-none font-oxanium tracking-wider bg-bgTitle bg-clip-text bg-fixed drop-shadow-secondary font-black rounded-sm bg-right md:bg-contain lg:bg-left">Blüm</h2>
        </div>
      </article>
    </section>
  );
}
