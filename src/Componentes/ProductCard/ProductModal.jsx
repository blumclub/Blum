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
    const isMobile = window.innerWidth < 768;
    const images = isMobile
      ? [product.ImagenV, product.imgV1, product.imgV2, product.imgV3, product.imgV4]
      : [product.ImagenH, product.imgH1, product.imgH2, product.imgH3, product.imgH4];

    setImageSrc(images[0] || "/placeholder.webp");
    setThumbnails(images.filter(Boolean));
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
        <div className="relative flex flex-col md:flex-row ">
          <div className="flex">
            {/* Imagen principal */}
            <Image key={imageSrc} src={imageSrc} alt={`Imagen de ${product.NombreProducto}`} width={500} height={500} className="rounded-lg object-contain w-full h-80 md:h-96" title={`Imagen de ${product.NombreProducto}`} loading="lazy" />
          </div>
          <div className="flex p-4 justify-center">
            {/* Miniaturas */}
            {thumbnails.length > 0 && (
              <div className="flex flex-row md:flex-col justify-center gap-2">
                {thumbnails.map((thumb, index) => (
                  <button key={index} type="button" onClick={() => handleThumbnailClick(thumb)}>
                    <Image src={thumb} alt={`Miniatura ${index + 1}`} width={64} height={64} className="h-10 w-10 md:w-16 md:h-16 rounded-lg border border-gray-300 p-1 object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-700">{product.DescripcionExt}</p>
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