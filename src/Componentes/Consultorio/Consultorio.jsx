/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Consultorio() {
  return (
    <section id="consultorio" className="bg-bgSecondary bg-fixed pb-20 scroll-mt-10 lg:scroll-mt-16 " style={{ textAlign: "-webkit-center" }}>
      <div className="flex flex-col justify-center text-center p-2 mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-5xl font-light text-primary uppercase my-16">
          Consultorio Medico
        </h2>
        <div className="flex flex-col items-center md:flex-row max-w-6xl mx-auto bg-primary rounded-md p-4 bg-opacity-10">
          <img
            src="https://res.cloudinary.com/deueso3sr/image/upload/v1726241033/10_1_ewahjz.webp"
            alt="Medico Tomas Leon"
            aria-label="Medico tomas Leon"
            width={300}
            height={300}
            className="rounded-lg m-4"
            />
          <div className="px-20 ">
            <p className="text-center text-primary font-oxanium font-semibold text-lg">
              En nuestro compromiso continuo de ofrecer soluciones integrales y
              respaldadas por la ciencia, estamos encantados de presentar
              nuestro Servicio de Consultorio Médico Cannábico. Este servicio
              está diseñado para proporcionar orientación médica especializada y
              personalizada sobre el uso del cannabis medicinal.
            </p>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}
