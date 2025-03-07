"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import ButtonWhats from "../Socials/ButtonWhats";
import { userinfo } from "@/app/Constants/userinfo";
import { useEffect, useState } from "react";

export default function ProductModal({ product, onClose, onNavigate }) {
  const getInitialImage = () =>
    window.innerWidth < 768 ? product.ImagenV || "/placeholderV.webp" : product.ImagenH || "/placeholderH.webp";

  const [imageSrc, setImageSrc] = useState(getInitialImage());

  useEffect(() => {
    setImageSrc(getInitialImage());
  }, [product]); // 🔹 Se ejecuta cada vez que 'product' cambia

  useEffect(() => {
    const updateImage = () => {
      const newImage = window.innerWidth < 768 ? product.ImagenV || "/placeholderV.webp" : product.ImagenH || "/placeholderH.webp";
      setImageSrc(newImage);
    };

    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [product.ImagenV, product.ImagenH]);

  console.log("ImagenV:", product.ImagenV);
  console.log("ImagenH:", product.ImagenH);
  console.log("Usando imagen:", imageSrc);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 max-w-3xl w-5/6 md:w-full relative gap-4">
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

        <div className="relative w-full h-80 md:h-96 mb-4">

          {imageSrc ? (
            <Image
                key={imageSrc}
                src={imageSrc}
                alt={product.NombreProducto}
                width={500} // Ajusta el tamaño según necesites
                height={700} // Ajusta el tamaño según necesites
                className="object-contain w-full h-full"
                title={product.NombreProducto}
                aria-label={product.NombreProducto}
                />
          ) : (
            <p className="text-red-500">Imagen no disponible</p>
          )}
        </div>

        <p className="text-gray-700">{product.DescripcionExt}</p>
        <p className="mt-2 text-xl font-bold text-primary">${product.Precio}</p>

        {userinfo?.contact?.phone && (
          <div className="mt-4 min-h-10 absolute bottom-4 right-4 z-20">
            <ButtonWhats contact={userinfo.contact.phone} textContact={`Hola, me interesa: ${product.NombreProducto}`} text={" Lo quiero"} />
          </div>
        )}
      </div>
    </div>
  );
}
