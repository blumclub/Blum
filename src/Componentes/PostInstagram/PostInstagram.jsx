'use client';
import React, { useEffect, useState } from 'react';
import publicado from '../Utils/publicacion';
import Link from 'next/link';
import InstagramPost from './InstagramPost';

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
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch('/api/instagram');
        const data = await response.json();
        if (response.ok) {
          setPosts(data);
        } else {
          console.error('Error fetching Instagram data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchLatestPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [posts]);

  if (posts.length === 0) {
    return <Skeleton />;
  }

  return (
    <section className="bg-gradient-to-r from-primary to-secondary shadow-xl pb-16">
      <article className="p-6 rounded-lg max-w-6xl mx-auto py-8 ">
        <Link target='_blank' href={posts[currentIndex].permalink}>
          <div className="flex flex-col md:flex-row items-center transition-transform duration-500 ease-in-out">
            <div className="md:w-2/3 text-white mb-6 md:mb-0 md:pr-6">
              <h2 className="text-3xl font-bold text-white mb-4">Última publicación de Instagram</h2>
              <p className="text-lg mb-4">
                { "¡Explora nuestra comunidad de cultivo! 🌱💚"}
              </p>
            </div>
            <div className="w-[220px] mx-auto relative">
            <div className="absolute inset-0 bg-white opacity-20 rounded-full scale-110 rotate-12 transform"></div>
              <div className="absolute inset-0 bg-yellow-300 opacity-20 rounded-full scale-95 -rotate-6 transform"></div>
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <InstagramPost 
                username={'Blum.club'} 
                img={posts[currentIndex].media_url} 
                timestamp={publicado(posts[currentIndex].timestamp)}
                mediaType={posts[currentIndex].media_type}
                />
            </div>
            </div>
          </div>
        </Link>
      </article>
    </section>
  );
};

export default PostInstagram;
