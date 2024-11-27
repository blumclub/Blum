import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";
import React from 'react';

const Cultivo = () => {
  const beneficios = [
    'Mayor control sobre los nutrientes.',
    'Reducción del uso de agua.',
    'Mayor rendimiento en menos espacio.',
    'Menor riesgo de plagas y enfermedades.'
  ];

  return (
    <section className="bg-gray-100 font-aileron text-gray-900 p-8 md:p-12 lg:p-16">
      <div className='max-w-7xl mx-auto'>
        <article className="text-center mb-12">
          <h1 className="text-primary font-bold text-3xl md:text-5xl mt-20">Cultivo Hidropónico de Cannabis por <strong className='font-oxanium'> Blüm</strong></h1>
          <h2 className="text-lg xl:text-xl md:text-xl mt-4 text-secondary">
            Aprende cómo cultivar cannabis de manera eficiente utilizando el método hidropónico, <br/> una forma moderna y eficiente para obtener cosechas saludables.
          </h2>
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center ">
            <h2 className="text-secondary font-semibold text-2xl md:text-3xl mb-4">¿Qué es el cultivo hidropónico?</h2>
            <p className="text-lg xl:text-xl text-gray-700">
              El cultivo hidropónico es un método de cultivo en el que las plantas crecen sin suelo, utilizando soluciones nutritivas. Este método es perfecto para el cultivo de cannabis, ya que permite un control preciso de los nutrientes y el agua, optimizando el crecimiento y la producción.
            </p>
          </div>
          <img src="https://res.cloudinary.com/deueso3sr/image/upload/t_wide/v1731517554/Bl%C3%BCm-0605_uqwo2a.webp" alt="Sistema de cultivo hidropónico" className="rounded-lg shadow-lg w-full max-w-md" />
        </article>
        <article className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src="https://res.cloudinary.com/deueso3sr/image/upload/t_cuadrado/v1731517648/Bl%C3%BCm-0594_kpjtaw.webp" alt="Planta de cannabis" className="rounded-lg shadow-lg w-full max-w-md md:order-1 order-2"/>
          <div className="flex flex-col justify-center md:order-2 order-1">
            <h2 className="text-secondary font-semibold text-2xl md:text-3xl mb-4">Beneficios del cultivo hidropónico</h2>
            <ol className="space-y-2">
              {beneficios.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-4 text-lg font-aileron">
                  <img src="/icons/icon-48x48.png" alt="icono" className="w-12 h-12"/>
                  <p className="text-primary text-lg xl:text-xl">{benefit}</p>
                </li>
              ))}
            </ol>
          </div>
        </article>
        <br/>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-secondary font-semibold text-2xl md:text-3xl mb-4">¿Cómo es el cultivo hidropónico en <strong className='font-oxanium'> Blüm</strong>?</h2>
            <p className="text-lg xl:text-xl text-gray-700">
              En Blüm, utilizamos el cultivo hidropónico, un avanzado método en el que las plantas crecen sin necesidad de suelo, empleando soluciones nutritivas que les proporcionan los minerales y agua necesarios para su desarrollo. Este método nos permite tener un control total sobre la mezcla de nutrientes y el pH, asegurando que cada planta reciba las condiciones ideales para su crecimiento.
            </p>
            <br/>
            <p className="text-lg xl:text-xl text-gray-700">
              Gracias a este enfoque, optimizamos el crecimiento de nuestras genéticas de cannabis, logrando un desarrollo más rápido y eficiente. Esto se traduce en plantas más saludables, con mayores rendimientos y una calidad superior, minimizando el riesgo de enfermedades y plagas. El cultivo hidropónico nos permite experimentar con diferentes combinaciones de nutrientes, adaptándonos a las necesidades específicas de cada cepa.
            </p>
          </div>
          <img src="https://res.cloudinary.com/deueso3sr/image/upload/v1731518061/Bl%C3%BCm-0597-b_aocvuy.webp" alt="Sistema de cultivo hidropónico" className="rounded-lg shadow-lg w-full max-w-md" />
        </article>
        <article className="mt-12 flex justify-center">
          <Link href={'https://api.whatsapp.com/send/?phone=541162574919&text=Hola%2C+te+escribo+desde+la+web%2C++&type=phone_number&app_absent=0'} target="_blank" >
            <button className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-secondary transition">Contáctanos para más información</button>
          </Link>
        </article>
        <Link href={'/#cultivoHidroponico'}>
          <button className="bg-primary text-white font-semibold py-3 px-6 w-full md:w-40 rounded-lg hover:bg-secondary transition mt-6 flex items-center justify-center space-x-2">
            <FaArrowLeft className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Cultivo;
