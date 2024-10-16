/* eslint-disable @next/next/no-img-element */
import React from "react";

const steps = [
  {
    number: 1,
    title: "Conocenos!",
    description: "Completa el formulario",
  },
  {
    number: 2,
    title: "Entrevista",
    description: "Doc. Tomás León.",
  },
  {
    number: 3,
    title: "Socio",
    description: "Gestionar Reprocann",
  },
];

export default function Consultorio() {
  return (
    <section id="consultorio" className="bg-secondary pb-10 scroll-mt-10 lg:scroll-mt-16">
      <article className="flex flex-col justify-center text-center p-2 mx-auto max-w-7xl">
        <h2 className="text-3xl lg:text-5xl font-light text-primary uppercase mt-16 mb-4">Consultorio Medico</h2>
        <div className="flex flex-col items-center md:flex-row max-w-7xl mx-auto rounded-md p-4">
          <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726241033/10_1_ewahjz.webp" alt="Medico Tomás León" aria-label="Medico Tomás León" className="rounded-full w-48 h-48 lg:w-72 md:h-72 lg:h-80 object-cover mb-8 shadow-yellow-400 shadow-xl"/>
          <div className="px-4 mx-6">
            <p className="text-start text-lg lg:text-xl xl:text-2xl xl:pl-8 text-primary font-oxanium font-semibold mb-4 lg:mb-10 xl:mb-16">
              En nuestro compromiso continuo de ofrecer soluciones integrales y respaldadas por la ciencia, estamos encantados de presentar nuestro Servicio de Consultorio Médico Cannábico. Este servicio está diseñado para proporcionar orientación médica especializada y personalizada sobre el uso del cannabis medicinal.
            </p>
            <ol className=" items-start space-y-4 sm:space-y-0 rtl:space-x-reverse flex flex-col sm:flex-row justify-around md:items-center w-full">
              {steps.map((step) => (
                <li key={step.number} className="flex  sm:flex-row justify-between text-start items-center text-gray-200 space-x-4 rtl:space-x-reverse">
                  <span className="flex items-center justify-center w-8 h-8 border border-primary ring-1 rounded-full shrink-0 drop-shadow-lg shadow text-primary mb-2 sm:mb-0">
                    {step.number}
                  </span>
                  <span className="text-center">
                    <h3 className="font-bold lg:text-xl text-primary">{step.title}</h3>
                    <p className="text-sm lg:text-lg">{step.description}</p>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </section>
  );
}
