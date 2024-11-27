/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { catalogo } from "@/app/Constants/userinfo";
import { usePathname } from "next/navigation";

const Catalogo = () => {
    const path = usePathname();

    const renderProductCard = (prod, isMobile) => (
        <Link href={`/catalogo/${prod.href}`} key={prod.nombre} title={prod.nombre}>
            <div className={`group relative cursor-pointer overflow-hidden transition-all duration-300 rounded-xl 
                ${isMobile ? 'bg-primary m-2 my-6 shadow-lg shadow-neutral-800' : 'mx-1 md:w-60 lg:w-72 xl:w-96 shadow-xl shadow-neutral-800 bg-primary hover:scale-105'}`}>
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-[#1a4249] to-[#076885] transition-all duration-300 group-hover:scale-[21]"></span>
                <div className={`relative z-10 ${isMobile ? 'grid grid-cols-3' : ''}`}>
                    <img className={`object-cover w-full h-full ${isMobile ? '' : 'rounded-t-xl'}`} src={prod.img} alt={prod.nombre} title={prod.nombre}/>
                    <div className={`${isMobile ? 'col-span-2 p-3 flex flex-col justify-between items-end' : 'p-4 min-h-60'}`}>
                        <div>
                            <h3 className={`${isMobile ? 'text-lg font-semibold' : 'text-2xl font-bold'} text-gray-200`}>{prod.nombre}</h3>
                            {isMobile ? <hr className="mt-1" /> : ''}
                            <p className={`text-gray-300 ${isMobile ? 'text-sm leading-4 pt-3 pb-6' : 'mb-4 font-normal'}`}>
                                {prod.descripcion}
                            </p>
                        </div>
                        <button className={`text-sm border px-2 py-1 rounded-md ${isMobile ? '' : 'absolute bottom-0 right-0 md:w-[90%] lg:w-1/2 m-2'} hover:translate-y-[1px] hover:bg-secondary hover:text-primary hover:font-semibold`}>
                            {prod.btn}
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <section id="Catalogo" className={`${path !== '/'?'bg-primary':'bg-secondary'} py-10 scroll-mt-16 lg:scroll-mt-10`}>
            <div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-7xl sm:py-4 lg:px-8 md:pt-12">
                <article className="text-center mb-6">
                    <Fade direction={"left"} delay={600} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className={`text-3xl lg:text-5xl font-aileron ${path !== '/' ? 'text-secondary' : 'text-primary'} uppercase my-8 text-center`}>Catálogo</h2>
                    </Fade>
                </article>
                <article className="md:flex md:flex-row md:flex-wrap gap-4 justify-center">
                    {catalogo.map((prod) => (
                        <div key={prod.nombre} className="hidden md:flex md:flex-row md:flex-wrap rounded-lg">
                            {renderProductCard(prod, false)}
                        </div>
                    ))}
                    {catalogo.map((prod) => (
                        <div key={prod.nombre} className="md:hidden">
                            {renderProductCard(prod, true)}
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
};

export default Catalogo;
