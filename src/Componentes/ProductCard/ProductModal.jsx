"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonWhats from "../Socials/ButtonWhats";
import { userinfo } from "@/app/Constants/userinfo";

export default function ProductModal({ product, onClose, onNavigate }) {
  const [imageSrc, setImageSrc] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  // Función para obtener la imagen principal y miniaturas según el tamaño de pantalla
  const updateImages = () => {
    if (!product) return;

    const isMobile = window.innerWidth < 768;
    
    // Filtrar imágenes válidas y evitar que se mezclen las categorías
    const verticalImages = [product.ImagenV, product.imgV1, product.imgV2, product.imgV3].filter(img => img);
    const horizontalImages = [product.ImagenH, product.imgH1, product.imgH2, product.imgH3].filter(img => img);

    // Usar imágenes según el tipo de pantalla
    const images = isMobile ? verticalImages : horizontalImages;

    setImageSrc(images.length > 0 ? images[0] : "/placeholder.webp");
    setThumbnails(images);
};



  useEffect(() => {
    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, [product]);

  // Función para cambiar la imagen principal al hacer clic en una miniatura
  const handleThumbnailClick = (src) => {
    if (src) setImageSrc(src);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 max-w-3xl w-5/6 md:w-full relative">
        <button className="absolute top-2 right-2 text-gray-700 hover:text-gray-900" onClick={onClose}>
          <X className="h-6 w-6" />
        </button>

        <div className="flex justify-between items-center my-6">
          <button onClick={() => onNavigate("left")} className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-6 w-6 mx-5" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">{product.NombreProducto}</h2>
          <button onClick={() => onNavigate("right")} className="text-gray-600 hover:text-gray-900">
            <ChevronRight className="h-6 w-6 mx-5" />
          </button>
        </div>

        {/* Imágenes */}
        <div className="relative flex flex-col md:flex-row justify-around ">
          <div className="flex h-80 md:h-96">
            {/* Imagen principal */}
            <Image
                key={imageSrc}
                src={imageSrc}
                alt={`Imagen de ${product.NombreProducto}`}
                width={500}
                height={500}
                className="rounded-lg object-cover w-full h-80 md:h-96"
                title={`Imagen de ${product.NombreProducto}`}
                loading="lazy"
              />
          </div>
          <div className="flex flex-row md:flex-col justify-center gap-2 my-4 md:my-0">
              {thumbnails.map((thumb, index) => (
                <button key={index} type="button" onClick={() => handleThumbnailClick(thumb)}>
                  <Image
                    src={thumb}
                    alt={`Miniatura ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg border border-gray-300 p-1 object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
        </div>

        <p className="text-gray-700 min-h-36 md:min-h-20 md:mt-2">{product.DescripcionExt}</p>
        <p className="mt-2 text-xl font-bold text-primary">${product.Precio}</p>

        {userinfo?.contact?.phone && (
          <div className="mt-4 min-h-10 absolute bottom-4 right-4 z-20">
            <ButtonWhats contact={userinfo.contact.phone} textContact={`Hola, me interesa: ${product.NombreProducto}`} text={"Lo quiero"} />
          </div>
        )}
      </div>
    </div>
  );
}