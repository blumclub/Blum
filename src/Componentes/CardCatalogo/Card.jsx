/* eslint-disable @next/next/no-img-element */
'use client';
import PorcentajeAnimado from "@/Componentes/Porcentaje/Porcentaje";
import './card.css';
import { Fade } from "react-awesome-reveal";

const ListaConTitulo = ({ titulo, items }) => (
    <>
<div className="bg-amber-700 opacity-10 absolute inset-0 rounded-lg font-aileron " />
<div className="w-full rounded-lg pl-2 my-2 z-10">
    <h2 className="text-base font-bold text-primary pb-1 mb-2 tracking-wider">{titulo}</h2>
    <ul className="list-none space-y-1">
        {items.map((item, index) => (
            <li key={index} className="flex items-center text-sm text-white">
                <img src="/Logo/LogoBlumContacto.webp" alt="icono BLUM" className="w-4 h-4" width={16} height={16} title="Logo Blum Club"/>
                {item}
            </li>
        ))}
    </ul>
</div>

    </>
);

export default function Card({ producto }) {
    return (
        <div className="min-h-[450px] cursor-pointer card-flip"> 
            <Fade key={producto.id} direction="right" delay={100} cascade damping={0.1} triggerOnce>
                <div className="">
                    <div className="card-inner">
                        {/* Front side */}
                        <div className="card-front bg-white rounded-lg shadow-xl min-h-[450px]">
                            <div className="w-full md:max-w-md lg:max-w-lg mb-4 rounded-lg">
                                <div className="relative duration-700 w-full h-full rounded-lg overflow-hidden flex flex-col">
                                    <div className="w-full min-h-[450px] flex flex-col justify-around">
                                        <h2 className="text-xl font-bold text-gray-800 py-2 text-center uppercase items-center">
                                            {producto.nombre}
                                        </h2>
                                        <div className="relative w-full p-2 align-bottom ">
                                            <PorcentajeAnimado producto={producto} estilo="absolute top-4 right-4 z-10 " />
                                            <img className="w-full h-auto object-cover rounded-t-md overflow-hidden" src={producto.imagen} alt={producto.nombre} title={producto.nombre} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back side */}
                        <div className="card-back bg-secondary text-gray-800 p-2 rounded-lg min-h-[450px]">
                            <div className="w-full min-h-28">
                                <h2 className="text-xl font-bold text-gray-800 py-1 text-center uppercase items-center">
                                    {producto.nombre}
                                </h2>
                                <p className="text-gray-600 mt-2 leading-relaxed text-md items-center text-center">{producto.descripcion}</p>
                            </div>
                            <div className="relative grid gap-1 grid-cols-2 p-1">
                                {producto.recomendadoPara.length?<ListaConTitulo titulo="Recomendado" items={producto.recomendadoPara} /> : null}
                                {producto.efectos.length?<ListaConTitulo titulo="Efectos" items={producto.efectos} /> : null}
                                {producto.sabor.length?<ListaConTitulo titulo="Sabor" items={producto.sabor} /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
