'use client';
import React from 'react';

const InstagramPost = ({ username, img, timestamp, mediaType }) => {
  const MediaContainer = ({ children }) => (
    <div className="relative w-[210px] h-[210px] overflow-hidden rounded-lg shadow-xl mx-auto">
      {children}
    </div>
  );

  const renderMedia = () => {
    switch (mediaType) {
      case 'IMAGE':
        return (
          <MediaContainer>
            <img
              src={img || '/BG/flores.webp'}
              alt="Última publicación de Instagram"
              className="w-full h-full object-cover"
              loading="lazy"
              title="Última publicación de Instagram"
            />
          </MediaContainer>
        );
      case 'VIDEO':
        return (
          <MediaContainer>
            <video
              src={img}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              loading="lazy"
              title="Última publicación de Instagram"
            />
          </MediaContainer>
        );
      case 'CAROUSEL_ALBUM':
        return (
          <MediaContainer>
            <img
              src={img || '/Logo/LOGBLUMX.webp'}
              alt="Última publicación de Instagram"
              className="w-full h-full object-cover"
              loading="lazy"
              title="Última publicación de Instagram"
            />
          </MediaContainer>
        );
      default:
        return (
          <MediaContainer>
            <img
              src="/Logo/LOGBLUMX.webp"
              alt="Sin imagen"
              className="w-full h-full object-cover"
              title="Sin imagen"
            />
          </MediaContainer>
        );
    }
  };

  return (
    <div className="max-w-[270px] border rounded-lg bg-white shadow-lg">
      <div className="flex items-center p-3">
        <img
          src="/Logo/LogoBlum160.webp"
          alt="Logo Blum Club"
          className="bg-primary rounded-full"
          width={40}
          height={40}
          title="Logo Blum Club"
          aria-label="Logo Blum Club"
        />
        <p className="font-semibold text-xs ml-3 text-gray-500">{username}</p>
        <p className="ml-auto text-gray-400 tracking-wider">•••</p>
      </div>

      {renderMedia()}

      <div className="flex justify-between px-3 pt-3">
        <div className="flex gap-2 items-start">
          <svg /* SVG de like */ />
          <svg /* SVG de comentar */ />
          <svg /* SVG de compartir */ />
        </div>
        <svg /* SVG de guardar */ />
      </div>

      <div className="px-3 py-2">
        <p className="text-xs text-gray-400">{timestamp}</p>
      </div>
    </div>
  );
};

export default InstagramPost;
