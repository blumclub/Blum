import Image from "next/image";
import ButtonWhats from "../Socials/ButtonWhats";

export function ProductCard({ product, userinfo, onImageClick }) {

  return (
    <div className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white min-w-[280px] mx-2">
      <div className="relative h-48 w-full cursor-pointer" onClick={onImageClick}>
      <Image
          src={product.ImagenH}
          alt={product.NombreProducto}
          width={280}
          height={192} 
          className="object-cover"
          title={product.NombreProducto}
        />
      </div>

      {userinfo?.contact?.phone && (
        <div className="absolute bottom-4 right-4 z-20">
          <ButtonWhats
            contact={userinfo.contact.phone}
            textContact={`Hola, me interesa: ${product.NombreProducto}`}
            text={"Lo quiero"}
          />
        </div>
      )}

      <div className="flex-1 p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.NombreProducto}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.Descripcion}</p>
        <p className="mt-2 text-xl font-bold text-primary">${product.Precio}</p>
      </div>
    </div>
  );
}
