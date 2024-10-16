/* eslint-disable @next/next/no-img-element */
'use client';
import { Fade } from "react-awesome-reveal";

const images = [
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/2_ouoygy.webp",
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/7_relwn9.webp",
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/8_t79umg.webp",
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726162508/10_gjh3q6.webp",
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/5_vaxghv.webp",
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/6_oo4nib.webp",
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/3_ki9gn1.webp",
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/7_relwn9.webp",
  "https://res.cloudinary.com/deueso3sr/image/upload/v1726160665/8_t79umg.webp"
];

const Gallery = () => {
  return (
    <section className="bg-primary flex justify-center">
      <div className="max-w-7xl mx-4 md:mx-10">
        <article className="text-center">
          <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
            <h2 className="text-3xl lg:text-5xl font-light text-secondary uppercase font-aileron my-16">Encuentros Sociales</h2>
          </Fade>
        </article>

        <article className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-16 mx-auto">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img className="h-auto max-w-full rounded-lg" src={src} alt={`Encuentro social ${index + 1}`} />
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default Gallery;
