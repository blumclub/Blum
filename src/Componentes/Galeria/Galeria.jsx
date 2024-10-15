/* eslint-disable @next/next/no-img-element */
'use client'
import { Fade } from "react-awesome-reveal";
import Division from "../Division/Division";
import DivisionRecta from "../Division/DivisionRecta";
import Link from "next/link";


const catalogo = [
  {
    nombre:'Unguentos',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa veniam sit. Asperiores rem iure corrupti eum exercitationem voluptates excepturi incidunt sit repellat libero maxime quo nobis corporis, est et.',
    href: 'unguentos'
  },
  {
    nombre:'Aceites',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa veniam sit. Asperiores rem iure corrupti eum exercitationem voluptates excepturi incidunt sit repellat libero maxime quo nobis corporis, est et.',
    href: 'aceites'
  },
  {
    nombre:'Cogollos',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa veniam sit. Asperiores rem iure corrupti eum exercitationem voluptates excepturi incidunt sit repellat libero maxime quo nobis corporis, est et.',
    href: 'cogollos'
  }
]

const Gallery = () => {
    return (
      <section
        id="Catalogo"
        className="bg-secondary bg-fixed pt-10 scroll-mt-16 lg:scroll-mt-10"
      >
        {/* <DivisionRecta /> */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl sm:py-4 lg:px-8  md:pt-12">
          <article className="text-center">
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-[] text-primary uppercase">
                Catálogo
              </h3>
            </Fade>
          </article>

          {/* <article className="m-2 bg-primary text-gray-200 rounded-lg shadow-xl hover:bg-[#1a4249]">
            <Link href="#" className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-tl-lg rounded-bl-lg md:rounded-none md:rounded-s-lg">
                <img
                  className="object-cover w-full h-full md:w-48 transition-transform duration-300 ease-in-out hover:scale-125"
                  src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/uvfwrvc1yihwkkvcf8re.webp"
                  alt=""
                />
              </div>
              <div className="col-span-2 p-3">
                <h5 className="text-lg font-semibold text-gray-200">
                  Unguetos
                </h5>
                <hr className="mt-1" />
                <p className="text-sm leading-4 pt-3 pb-6 text-gray-200">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                  non distinctio molestias enim eligendi...
                </p>
                <button className="text-end text-sm border px-1 rounded-md float-end">
                  Conocé mas!
                </button>
              </div>
            </Link>
          </article> */}
          {/* <article>
          

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/uvfwrvc1yihwkkvcf8re.webp" alt="img" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aceites</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver más
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

          </article> */}
        {catalogo.map((prod)=>{
          return (

          <div key={prod.nombre} class="relative overflow-hidden bg-primary rounded-lg m-2 max-w-[450px]">
            <div class="group   relative cursor-pointer overflow-hidden bg-primary shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl hovertranslate-y-1">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-[#1a4249] to-[#076885] transition-all duration-300 group-hover:scale-[21]"></span>
              <div class="relative grid grid-cols-3 z-10 ">
                <img
                  className="object-cover  w-full h-full rounded-tl-lg rounded-bl-lg  "
                  src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/uvfwrvc1yihwkkvcf8re.webp"
                  alt=""
                />
                
             

                  <div className="col-span-2 p-3 flex flex-col justify-between items-end">
                <div className="">

                <h5 className="text-lg font-semibold text-gray-200">
                  {prod.nombre}
                </h5>
                <hr className="mt-1" />
                <p className="text-sm leading-4 pt-3 pb-6 text-gray-200">
                 {prod.descripcion}
                </p>
                </div>
                <Link href={`/catalogo/${prod.href}`}>
                <button className="text-end text-sm border px-2 py-1 rounded-md float-end hover:translate-y-[1px]">
                  Conocé mas!
                </button>
                </Link>
              </div>
              </div>
            </div>
          </div>
          )

        })}


          {/* <article className="grid grid-cols-1 md:grid-cols-12 mt-16 mb-6 sm:space-x-6 space-y-6 md:space-y-0 px-6">
            <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
              <img
                src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/uvfwrvc1yihwkkvcf8re.webp"
                alt="Aceite"
                width={1000}
                height={805}
                className=" object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"
              />
            </div>
            <div className="col-span-6 flex justify-center">
              <div className="grid grid-rows-1 grid-flow-row gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/jtwhxkqr3aicyiimic15.webp"
                      alt="pizza-three"
                      width={500}
                      height={405}
                      className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/4_vkg8mv.webp"
                      alt="terminacion"
                      width={500}
                      height={405}
                      className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"
                    />
                  </div>
                </div>
                <div className="row-span-1 overflow-hidden rounded-3xl">
                  <img
                    src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/bdgqabjvgq68xu04mkqr.webp"
                    alt="Instalacion en Altura"
                    width={700}
                    height={405}
                    className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </article> */}
          <article className="flex flex-col w-full px-8">
            <div className="bg-primary rounded-md p-4 bg-opacity-20">
              <h2 className="text-center text-primary font-oxanium font-bold text-2xl">
                CULTIVO HIDROPONICO
              </h2>
              <p className="">
                Utilizamos el avanzado método de cultivo hidropónico, asegurando
                un entorno óptimo para el crecimiento de plantas de alta
                calidad.
              </p>
              <br />
            </div>
            <br />
            <div className="bg-primary rounded-md p-4 bg-opacity-20">
              <h2 className="text-center text-primary font-oxanium font-bold text-2xl">
                CULTIVO EN TIERRA
              </h2>
              <p className="">
                Donde la esencia misma de la terapia botánica cobra vida.
                Enraizado en las tradiciones agrícolas y abrazando la riqueza
                del suelo, nuestro cultivo en tierra es un homenaje a la
                simbiosis entre la planta y la tierra que la sustenta.
              </p>
            </div>
          </article>
          <article className="text-center ">
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-light text-primary uppercase my-16">
                Encuentros Sociales
              </h3>
            </Fade>
          </article>
          <article className="md:grid grid-cols-1 md:grid-cols-12 pb-16 pt-6 sm:space-x-6 space-y-6 md:space-y-0 px-6">
            <div className="col-span-6 flex justify-center">
              <div className="grid grid-rows-1 grid-flow-row gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/2_ouoygy.webp"
                      alt="Instalacion en terraza"
                      width={500}
                      height={405}
                      className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/7_relwn9.webp"
                      alt="pizza-four"
                      width={500}
                      height={405}
                      className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"
                    />
                  </div>
                </div>
                <div className="row-span-1 overflow-hidden rounded-3xl">
                  <img
                    src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160664/1_zkkwqr.webp"
                    alt="Instalacion en terraza"
                    width={700}
                    height={405}
                    className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
              <img
                src="https://res.cloudinary.com/deueso3sr/image/upload/v1726162508/10_gjh3q6.webp"
                alt="Instalacion en Hotel"
                width={1000}
                height={805}
                className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"
              />
            </div>
          </article>
          <article className="flex flex-col w-full px-8 pb-16">
            <div className="bg-primary rounded-md p-4 bg-opacity-20">
              <h2 className="text-center text-primary font-oxanium font-bold text-2xl">
                CANNABIS MEDICINAL
              </h2>
              <p className="">
                Empleamos técnicas de cultivo controladas y de precisión,
                aprovechando los beneficios de la tecnología hidropónica. Esto
                nos permite ofrecer plantas medicinales de la más alta pureza y
                calidad, optimizando su contenido terapéutico para satisfacer
                las necesidades de cada paciente.
              </p>
              <br />
            </div>
            <br />
            <div className="bg-primary rounded-md p-4 bg-opacity-20">
              <h2 className="text-center text-primary font-oxanium font-bold text-2xl">
                SOCIAL
              </h2>
              <p className="">
                Celebramos la conexión natural entre la tierra y la planta,
                cultivando de manera orgánica para preservar los ciclos
                naturales de la tierra. Nuestro enfoque social fomenta el
                respeto por la naturaleza, creando una relación armónica entre
                el cultivo y las comunidades que lo rodean.
              </p>
            </div>
          </article>
        </div>
        <Division />
      </section>
    );
}

export default Gallery;
