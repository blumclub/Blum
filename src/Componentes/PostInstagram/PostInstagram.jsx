'use client';
import React, { useEffect, useState } from 'react';
import publicado from '../../Componentes/Utils/publicacion';
import Link from 'next/link';
import InstagramPost from './InstagramPost';

const Skeleton = () => (
  <section className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg max-w-6xl mx-auto my-8 animate-pulse">
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
          <img
            src={post.media_url || '/Logo/LOGBLUMX.webp'}
            alt="Última publicación de Instagram"
            width={300}
            height={300}
            className="rounded-lg shadow-xl"
            loading="lazy"
          />
        );
      case 'VIDEO':
        return (
          <video
            src={post.media_url}
            width={300}
            height={300}
            className="rounded-lg shadow-xl"
            autoPlay
            loop
            muted
            loading="lazy"
          />
        );
      case 'CAROUSEL_ALBUM':
        return (
          <img
            src={post.children?.data[0]?.media_url || '/Logo/LOGBLUMX.webp'}
            alt="Última publicación de Instagram"
            width={300}
            height={300}
            className="rounded-lg shadow-xl"
            loading="lazy"
          />
        );
      default:
        return (
          <img
            src="/Logo/LOGBLUMX.webp"
            alt="Sin imagen"
            width={300}
            height={300}
            className="rounded-lg shadow-xl"
          />
        );
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
      <Link href={post.permalink}>
        <h2 className="text-3xl font-bold text-white mb-4">Última publicación de Instagram</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-white mb-6 md:mb-0 md:pr-6">
            <p className="text-lg mb-4">
              {post.caption || '¡Descubre nuestra nueva colección! 🌞👗 Prendas para que brilles en cada ocasión. #ModaVerano #ModaCircular'}
            </p>
            <p className="text-sm opacity-75">{last}</p>
          </div>
          <div className="md:w-1/3 relative">
            <div className="absolute inset-0 bg-white opacity-20 rounded-full scale-110 rotate-12 transform"></div>
            <div className="absolute inset-0 bg-yellow-300 opacity-20 rounded-full scale-95 -rotate-6 transform"></div>
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
              {renderMedia()}
            </div>
            {/* <div className="flex justify-center">
              <InstagramPost
                username="Blum Club"
                img={
                  post.media_type === 'CAROUSEL_ALBUM'
                    ? post.children?.data[0]?.media_url
                    : post.media_url
                }
                timestamp={last}
                mediaType={post.media_type}
              />
            </div> */}
            <div className="absolute top-0 right-12 w-12 h-12 bg-pink-400 rounded-full -mt-4 -mr-4 flex items-center justify-center">
              <span className="text-white text-2xl">✨</span>
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-purple-400 rounded-full -mb-2 -ml-2 flex items-center justify-center">
              <span className="text-white text-xl">🌟</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default PostInstagram;
