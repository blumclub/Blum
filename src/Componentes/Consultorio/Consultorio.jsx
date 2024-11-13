/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { steps } from "@/app/Constants/userinfo";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Contactusform from "../Contact/Contactus";



export default function Consultorio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.75 });

  return (
    <section id="consultorio" ref={ref} className="bg-secondary pb-10 scroll-mt-10 lg:scroll-mt-16">
      <article className="flex flex-col justify-center text-center p-2 mx-auto max-w-7xl">
        <Fade direction={"right"} delay={800} cascade damping={1e-1} triggerOnce={true}>
          <h2 className="text-3xl lg:text-5xl font-aileron text-primary uppercase mt-16 mb-4">Consultorio Medico</h2>
        </Fade>
        <div className="flex flex-col items-center md:flex-row max-w-7xl mx-auto rounded-md p-4">
          <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726241033/10_1_ewahjz.webp" alt="Medico Tomás León" aria-label="Medico Tomás León" className=" rounded-xl w-72 h-48 sm:w-96 lg:w-72 md:h-72 lg:h-80 object-cover mb-8 shadow-yellow-400 shadow-xl" />
          <div className="px-4 mx-6">
            <p className="text-start text-lg lg:text-xl xl:text-2xl xl:pl-8 text-primary font-aileron font-semibold mb-4 lg:mb-10 xl:mb-16">
              En nuestro compromiso continuo de ofrecer soluciones integrales y
              respaldadas por la ciencia, estamos encantados de presentar
              nuestro Servicio de Consultorio Médico Cannábico. Este servicio
              está diseñado para proporcionar orientación médica especializada y
              personalizada sobre el uso del cannabis medicinal.
            </p>
            <ol className="items-start space-y-4 sm:space-y-0 rtl:space-x-reverse flex flex-col sm:flex-row justify-around md:items-center w-full">
            {steps.map((step, index) => (
  <motion.li
    key={step.number}
    className="flex sm:flex-row justify-between text-start items-center text-gray-200 space-x-4 md:space-x-1 lg:space-x-2 rtl:space-x-reverse"
    initial={{ opacity: 0, x: 20 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
    transition={{ duration: 1, delay: index * 0.3 }}
  >
    {index === 0 ? (
        <>
          <span className="flex items-center justify-center w-8 h-8 border border-primary ring-1 rounded-full shrink-0 drop-shadow-lg shadow text-primary mb-2 sm:mb-0">
            {step.number}
          </span>
          <span className="text-start md:text-center">
            <h3 className="font-bold lg:text-xl text-primary">{step.title}</h3>
            <Contactusform text={step.description} estilo="text-sm lg:text-lg"/>
          </span>
        </>
    ) : (
      <>
        <span className="flex items-center justify-center w-8 h-8 border border-primary ring-1 rounded-full shrink-0 drop-shadow-lg shadow text-primary mb-2 sm:mb-0">
          {step.number}
        </span>
        <span className="text-start md:text-center">
          <h3 className="font-bold lg:text-xl text-primary">{step.title}</h3>
          <p className="text-sm lg:text-lg">{step.description}</p>
        </span>
      </>
    )}
  </motion.li>
))}

            </ol>
          </div>
        </div>
      </article>
    </section>
  );
}
