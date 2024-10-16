import React from 'react'

function Hidroponico() {
  return (
    <section id='cultivoHidroponico' className='mb-16'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-light text-secondary uppercase my-16 text-center">Cultivo Hidroponico</h2>
        <article className="grid grid-cols-1 md:grid-cols-12 mt-16 mb-6 sm:space-x-6 space-y-6 md:space-y-0 px-6">
            <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
              <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/uvfwrvc1yihwkkvcf8re.webp" alt="Aceite" width={1000} height={805}                className=" object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
            </div>
            <div className="col-span-6 flex justify-center">
              <div className="grid grid-rows-1 grid-flow-row gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="overflow-hidden rounded-3xl">
                    <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/jtwhxkqr3aicyiimic15.webp" alt="pizza-three" width={500} height={405}    className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                  </div>
                  <div className="overflow-hidden rounded-3xl">
                    <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/4_vkg8mv.webp" alt="terminacion" width={500} height={405}              className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                  </div>
                </div>
                <div className="row-span-1 overflow-hidden rounded-3xl">
                  <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1726159638/web/bdgqabjvgq68xu04mkqr.webp" alt="Instalacion en Altura" width={700}         height={405} className="object-cover transform transition-transform duration-300 hover:scale-110 rounded-3xl"/>
                </div>
              </div>
            </div>
        </article>
        <article className="flex flex-col w-full px-8">
            <div className="rounded-md p-4 bg-opacity-20">
              <h2 className="text-start text-secondary font-bold text-2xl">CULTIVO HIDROPONICO</h2>
              <p className="">Utilizamos el avanzado método de cultivo hidropónico, asegurando un entorno óptimo para el crecimiento de plantas de alta calidad.</p>
              <br />
            </div>
        </article>
      </div>
      {/* <div class="grid gap-4">
          <div>
              <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
          </div>
          <div class="grid grid-cols-5 gap-4">
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
              </div>
          </div>
      </div> */}
    </section>
  )
}

export default Hidroponico