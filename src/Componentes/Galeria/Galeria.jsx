/* eslint-disable @next/next/no-img-element */
'use client'
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
    return (
        <section className="bg-primary align-middle justify-center flex">
            <div className="max-w-7xl" >
                <article className="text-center ">
                    <Fade direction={"up"} delay={800} cascade damping={1e-1} triggerOnce={true} >
                    <h2 className="text-3xl lg:text-5xl font-light text-secondary uppercase font-aileron my-16">Encuentros Sociales</h2>
                    </Fade>
                </article>
                <article className="md:grid grid-cols-1 md:grid-cols-12 pb-16 pt-6 sm:space-x-6 space-y-6 md:space-y-0 px-6">
                    <div className="col-span-6 flex justify-center">
                        <div className="grid grid-rows-1 grid-flow-row gap-4">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="overflow-hidden rounded-3xl">
                                    <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/2_ouoygy.webp" alt="Clinica" width={500} height={405} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                                </div>
                                <div className="overflow-hidden rounded-3xl">
                                    <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/7_relwn9.webp" alt="Blum" width={500} height={405}               className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                                </div>
                            </div>
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160664/1_zkkwqr.webp" alt="Socios" width={700} height={500} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
                        <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726162508/10_gjh3q6.webp" alt="Instalacion en Hotel" width={1000} height={805} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Gallery;
