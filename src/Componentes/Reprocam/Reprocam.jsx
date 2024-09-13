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
            <button
              onClick={() => handleTabClick('Tramites')}
              className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === 'Tramites' ? 'bg-primary text-secondary font-oxanium' : 'bg-white text-gray-500  hover:bg-primary '
              }`}
            >
              <svg className="w-4 h-4 me-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Tramites
            </button>
          </li>
          <li className='min-w-36'>
            <button
              onClick={() => handleTabClick('Ley')}
              className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === 'Ley' ? 'bg-primary text-secondary font-oxanium' : 'bg-white text-gray-500  hover:bg-primary '
              }`}
            >
              <svg className="w-4 h-4 me-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              Ley
            </button>
          </li>
          <li className='min-w-36'>
            <button  onClick={() => handleTabClick('Reprocam')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full  ${
                activeTab === 'Reprocam' ? 'bg-primary text-secondary font-oxanium' : 'bg-white text-gray-500  hover:bg-primary ' }`}>
              <svg className="w-4 h-4 me-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
              </svg>
              Reprocam
            </button>
          </li>
          <li className='min-w-36'>
            <button  onClick={() => handleTabClick('Consultorio')} className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === 'Consultorio' ? 'bg-primary text-secondary font-oxanium' : 'bg-white text-gray-500  hover:bg-primary ' }`}>
              <svg className="w-4 h-4 me-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
              </svg>
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
