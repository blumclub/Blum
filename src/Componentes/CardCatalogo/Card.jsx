/* eslint-disable @next/next/no-img-element */
'use client'
import PorcentajeAnimado from "@/Componentes/Porcentaje/Porcentaje";
import { Fade } from "react-awesome-reveal";

const ListaConTitulo = ({ titulo, items }) => (
  <div className="bg-white rounded-lg p-3 my-2">
    <h2 className="text-sm font-bold text-gray-800 pb-2 mb-2">{titulo}</h2>
    <ul className="list-disc list-inside space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-sm text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

export default function Card({producto}) {


  return (
        <article id='card' className="">
            <Fade key={producto.id} direction="right" delay={100} cascade damping={0.1} triggerOnce>
              <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-2 md:mb-8 justify-center">
                <div className="md:w-1/2">
                  <img className="w-full h-full object-contain rounded-t-md md:rounded-l-md" src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className="md:w-1/2 p-4 flex flex-col justify-center bg-gray-50 text-gray-800">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2">{producto.nombre}</h2>
                  <p className="text-gray-600 mt-4 leading-relaxed text-sm">{producto.descripcion}</p>
                  <PorcentajeAnimado producto={producto} />
                  <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 p-1">
                    <ListaConTitulo titulo="Recomendado para:" items={producto.recomendadoPara} />
                    <ListaConTitulo titulo="Efectos" items={producto.efectos} />
                    <ListaConTitulo titulo="Perfil de Terpenos"
                      items={[
                        `Especiado: ${producto.perfilTerpenos.especiado}`,
                        `Terroso: ${producto.perfilTerpenos.terroso}`,
                        `Floral 1: ${producto.perfilTerpenos.floral1}`,
                        `Floral 2: ${producto.perfilTerpenos.floral2}`,
                      ]}
                    />
                    <ListaConTitulo titulo="Sabor" items={producto.sabor} />
                  </div>
                </div>
              </div>
            </Fade>
    </article>
  );
}
