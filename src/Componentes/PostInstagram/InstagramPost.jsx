const InstagramPost = ({ username, img, timestamp, mediaType }) => {
  
    const MediaContainer = ({ children }) => {
      return (
        <div className="relative w-[210px] h-[210px] overflow-hidden rounded-lg shadow-xl mx-auto">
          {children}
        </div>
      );
    };
  
    // Función para renderizar el contenido de acuerdo al tipo de media
    const renderMedia = () => {
      switch (mediaType) {
        case 'IMAGE':
          return (
            <MediaContainer>
              <img src={img || '/BG/flores.webp'} alt="Última publicación de Instagram" className="w-full h-full object-cover" loading="lazy" />
            </MediaContainer>
          );
        case 'VIDEO':
          return (
            <MediaContainer>
              <video src={img} className="w-full h-full object-cover" autoPlay loop muted loading="lazy" />
            </MediaContainer>
          );
        case 'CAROUSEL_ALBUM':
          return (
            <MediaContainer>
              <img src={post.children.data[0].media_url} alt="Última publicación de Instagram" className="w-full h-full object-cover" loading="lazy" />
            </MediaContainer>
          );
        default:
          return (
            <MediaContainer>
              <img src="/Logo/LOGBLUMX.webp" alt="Sin imagen" className=" w-full h-full object-cover" />
            </MediaContainer>
          );
      }
    };
  
    return (
      <div className="max-w-[270px] border rounded-lg bg-white shadow-lg">
        {/* Header con avatar y nombre de usuario */}
        <div className="flex items-center p-3">
            <img src='/Logo/LogoBlum160.webp' alt='logoblum' className="bg-primary rounded-full" width={40} height={40} /> 
            <p className="font-semibold text-xs ml-3 text-gray-500">{username}</p>
            <p className="ml-auto text-gray-400  tracking-wider">•••</p>
        </div>
  
        {/* Renderizar el media */}
        {renderMedia()}
      
        {/* Botones de interacción */}
        <div className="flex justify-between px-3 pt-3">
          <div className="flex gap-2 items-start">
              
            {/* svg like */}
            <svg aria-label="Like" className="w-6 h-6 text-red" fill="red" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ animation: 'ping-border 1s infinite' }}><style>{`@keyframes ping-border { 0% { stroke-width: 2; } 50% { stroke-width: 4; } 100% { stroke-width: 2; }}`}</style><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>


            {/* svg comentar */}
            <svg aria-label="Comment" class="w-6 h-6 text-gray00" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7c-1.95 0-3.82-.6-5.32-1.72l-4.28 1.15a.75.75 0 01-.92-.92l1.15-4.28A8.5 8.5 0 0112.5 3c4.7 0 8.5 3.8 8.5 8.5z"></path></svg>
              
            {/* svg compartir */}
            <svg aria-label="Compartir" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Compartir</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>

          </div>
          {/* svg guardar */}
          <svg aria-label="Save" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path></svg>
        </div>
  
        {/* Tiempo de publicación */}
        <div className="px-3 py-2">
          <p className="text-xs text-gray-400">{timestamp}</p>
        </div>
      </div>
    );
  };
  
  export default InstagramPost;
  