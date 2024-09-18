'use client';
import React, { useEffect, useState } from 'react';
import publicado from '../Utils/publicacion';
import Link from 'next/link';
import DivisionRecta from '../Division/DivisionRecta';

const Skeleton = () => (
  <section className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg shadow-lg max-w-6xl mx-auto my-8 animate-pulse">
    <h2 className="text-3xl font-bold text-white mb-4 bg-white bg-opacity-30 h-8 rounded"></h2>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 text-white mb-6 md:mb-0 md:pr-6">
        <p className="text-lg mb-4 bg-white bg-opacity-30 h-12 rounded"></p>
        <p className="text-sm opacity-75 bg-white bg-opacity-30 h-4 rounded"></p>
      </div>
      <div className="md:w-1/3 relative">
        <div className="absolute inset-0 bg-white opacity-20 rounded-full scale-110 rotate-12 transform"></div>
        <div className="absolute inset-0 bg-yellow-300 opacity-20 rounded-full scale-95 -rotate-6 transform"></div>
        <div className="relative">
          <div className="bg-white bg-opacity-30 rounded-lg h-64 w-full"></div>
        </div>
      </div>
    </div>
  </section>
);

const PostInstagram = () => {
  const [post, setPost] = useState(null);
  const [last, setLast] = useState();

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();

        if (response.ok) {
          setPost(data);
          setLast(publicado(data.timestamp));
        } else {
          console.error('Error fetching Instagram data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchLatestPost();
  }, []);

  if (!post) {
    return <Skeleton />;
  }

  // Función para renderizar el contenido de acuerdo al tipo de media
  const renderMedia = () => {
    switch (post.media_type) {
      case 'IMAGE':
        return (
          <img src={/*post.media_url ||*/ '/BG/flores.webp'} alt="Última publicación de Instagram" width={300} height={300} className="rounded-lg shadow-xl" loading="lazy"/>
        );
      case 'VIDEO':
        return (
          <video src={post.media_url} width={300} height={300} className="rounded-lg shadow-xl" autoPlay loop muted loading="lazy" />
        );
      case 'CAROUSEL_ALBUM':
        return (
          <img src={post.children.data[0].media_url} alt="Última publicación de Instagram" width={300} height={300} className="rounded-lg shadow-xl" loading="lazy" />
        );
      default:
        return <img src="'/Logo/LOGBLUMX.webp" alt="Sin imagen" width={300} height={300} className="rounded-lg shadow-xl" />;
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary  to-secondary  shadow-xl pb-16 bottom-[-20px]" >
      <article className='p-6 rounded-lg max-w-6xl mx-auto py-8'>
        <Link href={post.permalink}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-white mb-6 md:mb-0 md:pr-6">
              <h2 className="text-3xl font-bold text-white mb-4">Última publicación de Instagram</h2>
              <p className="text-lg mb-4">
                {post.caption || "¡Explora nuestra comunidad de cultivo! 🌱💚 Plantas que cuidan de tu bienestar en cada etapa. #CannabisSaludable #CultivoMedicinal"}
              </p>
              <p className="text-sm opacity-75">{last}</p>
            </div>
            <div className="md:w-1/3 relative">
              <div className="absolute inset-0 bg-white opacity-20 rounded-full scale-110 rotate-12 transform"></div>
              <div className="absolute inset-0 bg-yellow-300 opacity-20 rounded-full scale-95 -rotate-6 transform"></div>
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
                {renderMedia()}
              </div>
              <div className="absolute top-0 right-12 bg-primary ring-2 ring-secondary rounded-full -mt-4 -mr-4 flex items-center justify-center">
              <img src='/Logo/LogoBlum160.webp' alt='logoblum' width={62} height={62} /> 

              </div>
              <div className="absolute bottom-0 left-0 bg-primary ring-2 ring-secondary rounded-full -mb-2 -ml-2 flex items-center justify-center">
                <img src='/Logo/LogoBlum160.webp' alt='logoblum' width={48} height={48} /> 
              </div>
            </div>
          </div>
        </Link>
      </article>
      {/* <DivisionRecta /> */}
    </section>
  );
};

export default PostInstagram;
