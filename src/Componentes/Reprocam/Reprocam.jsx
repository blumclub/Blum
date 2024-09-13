'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Reprocam = () => {
  // Estado para controlar qué tab está activo
  const [activeTab, setActiveTab] = useState('Reprocam');

  // Función para cambiar el tab activo
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className='bg-tertiary' style={{textAlign:'-webkit-center'}}>
      <div className="md:flex bg-tertiary p-4 max-w-[1200px] ">
        <article className="flex-column space-y-4 text-sm font-medium text-gray-500  md:me-4 mb-4 md:mb-0 list-none content-around">
          <li className='min-w-36'>
            <button onClick={() => handleTabClick('Tramites')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === 'Tramites' ? 'bg-primary text-secondary font-oxanium' : 'bg-white text-gray-500  hover:bg-primary '}`}>
                <img src='Reprocam/tramitation.svg' alt='tramitacion' width={30} height={30} className='pr-2'/>
                Tramites
            </button>
          </li>
          <li className='min-w-36'>
            <button onClick={() => handleTabClick('Ley')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === 'Ley' ? 'bg-primary text-secondary font-oxanium' : 'bg-white text-gray-500  hover:bg-primary '}`}>
                <img src='Reprocam/law.svg' alt='tramitacion' width={30} height={30} className='pr-2'/>
                Ley
            </button>
          </li>
          <li className='min-w-36'>
            <button  onClick={() => handleTabClick('Reprocam')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full  ${
                activeTab === 'Reprocam' ? 'bg-primary text-secondary font-oxanium' : 'bg-white text-gray-500  hover:bg-primary ' }`}>
                <img src='Reprocam/law-book.svg' alt='tramitacion' width={30} height={30} className='pr-2'/>
                Reprocam
            </button>
          </li>
          <li className='min-w-36'>
            <button  onClick={() => handleTabClick('Consultorio')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === 'Consultorio' ? 'bg-primary text-secondary font-oxanium' : 'bg-white text-gray-500  hover:bg-primary ' }`}>
                <img src='Reprocam/health.svg' alt='tramitacion' width={30} height={30} className='pr-2'/>
                Consultorio
            </button>
          </li>
        </article>
        <article className="p-6 bg-primary text-medium text-white rounded-lg w-full min-h-[450px] md:min-h-80 lg:min-h-64">
          {activeTab === 'Tramites' && (
            <div>
              <h2 className="text-lg font-bold text-secondary font-oxanium uppercase mb-2">Tramites relacionados</h2><br/>
                <p>
                    <Link href="https://www.argentina.gob.ar/salud/cannabis-medicinal/reprocann" className='pointer no-underline '>Trámite REPROCANN</Link>
                </p><br/>
                <p>
                    <Link href="https://d2qp.short.gy/Instructivo_REPROCANN" className='pointer no-underline '>Instructivo REPROCANN</Link>
                </p><br/>
                <p>
                    <Link href="https://www.argentina.gob.ar/salud/cannabis-medicinal/frecuentes#:~:text=El%20REPROCANN%20es%20una%20base,y%2Fo%20paliativo%20del%20dolor." className='pointer no-underline'>Preguntas frecuentes sobre el REPROCANN</Link>
                </p>
            </div>
          )}
          {activeTab === 'Ley' && (
            <div>
              <h2 className="text-lg font-bold text-secondary font-oxanium  uppercase mb-2">Marco Legal</h2>
              <p>El Programa, dependiente de la Dirección Nacional de Medicamentos y Tecnología Sanitaria, fue creado por la Ley 27.350 y su objeto es establecer un marco regulatorio para la investigación médica y científica del uso medicinal, terapéutico y/o paliativo del dolor de la planta de cannabis y sus derivados, garantizando y promoviendo el cuidado integral de la salud.</p>
            </div>
          )}
          {activeTab === 'Reprocam' && (
            <div>
              <h2 className="text-lg font-bold text-secondary font-oxanium uppercase mb-2">Reprocam</h2>
              <p>Es una base de datos diseñada para poder registrar a aquellas personas que cuenten con las condiciones para acceder a un cultivo controlado de la planta de cannabis, con fines de tratamiento medicinal, terapéutico y/o paliativo del dolor.
                Lxs pacientes podrán obtener a través del mismo la autorización de cultivo para si, a través de un familiar, un tercero o una asociación civil como lo seria en este caso.
                La inscripción finaliza con una autorización expedida por el Ministerio de Salud de la Nación.
                En caso de que no cuentes con el mismo o no sepas como tramitarlo te adjuntamos el link para hacerlo más fácil y simple:</p>
            </div>
          )}
          {activeTab === 'Consultorio' && (
            <div>
              <h2 className="text-lg font-bold text-secondary font-oxanium uppercase mb-2">Consultorio Medico</h2>
              <div className="flex flex-col items-center md:flex-row">
                  <img src='https://res.cloudinary.com/deueso3sr/image/upload/v1726241033/10_1_ewahjz.webp' alt='Medico Tomas Leon' aria-label='Medico tomas Leon' width={150} height={150} className='rounded-md md:mr-4 mb-4'/>
                  <p>En nuestro compromiso continuo de ofrecer soluciones integrales y respaldadas por la ciencia, estamos encantados de presentar nuestro Servicio de Consultorio Médico Cannábico. Este servicio está diseñado para proporcionar orientación médica especializada y personalizada sobre el uso del cannabis medicinal.</p>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Reprocam;
