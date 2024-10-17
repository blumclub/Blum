// src/Componentes/Comentarios/Comentarios.jsx

import React from "react";
import { testimonios } from "@/app/Constants/userinfo";
import Testimonio from "./Testimonio";

export default function Comentarios() {
  return (
    <section className="bg-primary px-4 pb-12 md:pb-24">
      <div className="max-w-screen-xl mx-auto">
        <article className="text-center mb-6">
          <h2 className="text-3xl lg:text-5xl font-aileron text-secondary uppercase mt-16 mb-8 text-center">Testimonios</h2>
        </article>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
          {testimonios.map((testimonio, index) => (
            <Testimonio key={index} testimonio={testimonio} />
          ))}
        </div>
      </div>
    </section>
  );
}
