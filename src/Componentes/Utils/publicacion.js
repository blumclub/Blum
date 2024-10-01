const publicado = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const seconds = Math.floor((now - postDate) / 1000);
  
    const intervals = [
      { label: 'años', seconds: 31536000 },
      { label: 'meses', seconds: 2592000 },
      { label: 'días', seconds: 86400 },
      { label: 'horas', seconds: 3600 },
      { label: 'minutos', seconds: 60 },
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count > 0) {
        return `Publicado hace ${count} ${interval.label}`;
      }
    }
  
    return 'Publicado hace un momento';
  };

  export default publicado;