/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { catalogo } from "@/app/Constants/userinfo";

const Catalogo = () => {
    return (
        <section id="Catalogo" className="bg-secondary py-10 scroll-mt-16 lg:scroll-mt-10 ">
            <div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-7xl sm:py-4 lg:px-8 md:pt-12">
                <article className="text-center mb-6">
                    <Fade direction={"up"} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className="text-3xl lg:text-5xl text-primary uppercase">Catálogo</h2>
                    </Fade>
                </article>
                <article className="md:flex md:flex-row md:flex-wrap gap-4 justify-center">
                    {catalogo.map((prod) => {
                        return (
                                <div id="notebook" key={prod.nombre} className="hidden md:flex md:flex-row md:flex-wrap rounded-lg">
                                    <Link href={`/catalogo/${prod.href}`}>
                                        <div className="md:w-60 lg:w-72 xl:w-96 rounded-xl shadow">
                                            <div className="group relative cursor-pointer border-none overflow-hidden bg-primary transition-all duration-300 hover:transform hover:scale-105 rounded-xl">
                                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full border-none bg-gradient-to-r from-[#1a4249] to-[#076885] transition-all duration-300 group-hover:scale-[21]"></span>
                                                <img className="relative z-10 rounded-t-xl" src={prod.img} alt={prod.nombre} />
                                                <div className="relative z-20 p-4 min-h-60">
                                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">{prod.nombre}</h3>
                                                    <p className="mb-4 font-normal text-gray-300">{prod.descripcion}</p>
                                                    <div className="mt-2 flex justify-center lg:justify-end">
                                                        <button className="absolute bottom-0 right-0 md:w-[90%] lg:w-1/2 m-2 text-sm uppercase border-2 rounded-lg py-1 hover:bg-secondary hover:text-primary hover:font-semibold hover:border-secondary">{prod.btn}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                        );
                    })}

                    {catalogo.map((prod) => {
                        return (
                            <div id="movil" key={prod.nombre} className="md:hidden relative overflow-hidden bg-primary m-2 max-w-7xl my-4 ">
                                <Link href={`/catalogo/${prod.href}`} className="rounded-xl">
                                    <div className="group relative cursor-pointer overflow-hidden bg-primary transition-all duration-300 hover:shadow-2xl hovertranslate-y-1 ">
                                        <span className="absolute top-10 z-0 h-20 w-20 bg-gradient-to-r from-[#1a4249] to-[#076885] transition-all duration-300 group-hover:scale-[21]"></span>
                                        <div className="relative grid grid-cols-3 z-10 ">
                                            <img className="object-cover w-full h-full" src={prod.img} alt={prod.nombre} />
                                            <div className="col-span-2 p-3 flex flex-col justify-between items-end">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-200">{prod.nombre}</h3>
                                                    <hr className="mt-1" />
                                                    <p className="text-sm leading-4 pt-3 pb-6 font-aileron text-gray-200">{prod.descripcion}</p>
                                                </div>
                                                <button className="text-end text-sm border px-2 py-1 rounded-md float-end hover:translate-y-[1px]">{prod.btn}</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
};

export default Catalogo;
