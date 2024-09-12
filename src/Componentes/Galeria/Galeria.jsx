'use client'
import { Fade } from "react-awesome-reveal";


const Gallery = () => {
    return (
        <section id="galeria" className="bg-bgSecondary bg-fixed">
            <div className='mx-auto max-w-2xl lg:max-w-4xl sm:py-4 lg:px-8  md:pt-12'>
                <article className="text-center">
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className='text-primary text-4xl mb-3 font-oxanium font-bold tracking-widest ls-51'>Galeria</h2>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-light text-primary uppercase">Nuestros Productos</h3>
                    </Fade>
                </article>
                <article className='grid grid-cols-1 md:grid-cols-12 mt-16 mb-6 sm:space-x-6 space-y-6 md:space-y-0 px-6'>
                    <div className='col-span-6 flex justify-center overflow-hidden rounded-3xl'>
                        <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/uvfwrvc1yihwkkvcf8re.webp" alt="Aceite" width={1000} height={805} className=" object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                    </div>
                    <div className='col-span-6 flex justify-center'>
                        <div className="grid grid-rows-1 grid-flow-row gap-4">
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/bdgqabjvgq68xu04mkqr.webp" alt="Instalacion en Altura" width={700} height={405} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='overflow-hidden rounded-3xl'>
                                    <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/jtwhxkqr3aicyiimic15.webp" alt="pizza-three" width={500} height={405} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                                </div>
                                <div className='overflow-hidden rounded-3xl'>
                                    <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/4_vkg8mv.webp" alt="terminacion" width={500} height={405} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="text-center ">
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-light text-primary uppercase my-16">Encuentros Sociales</h3>
                    </Fade>
                </article>
                <article className='md:grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6'>
                    <div className='col-span-6 flex justify-center'>
                        <div className="grid grid-rows-1 grid-flow-row gap-4">
                        <div className='grid grid-cols-2 gap-2'>
                                <div className='overflow-hidden rounded-3xl'>
                                    <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/2_ouoygy.webp" alt="Instalacion en terraza" width={500} height={405} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                                </div>
                                <div className='overflow-hidden rounded-3xl'>
                                    <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/7_relwn9.webp" alt="pizza-four" width={500} height={405} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                                </div>
                            </div>
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160664/1_zkkwqr.webp" alt="Instalacion en terraza" width={700} height={405} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center overflow-hidden rounded-3xl'>
                        <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/8_t79umg.webp" alt="Instalacion en Hotel" width={1000} height={805} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Gallery;
