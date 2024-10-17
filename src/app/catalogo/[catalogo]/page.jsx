'use client'
import Card from "@/Componentes/CardCatalogo/Card";
import Catalogo from "@/Componentes/Catalogo/Catalogo";
import { catalogo } from "@/app/Constants/catalogo";
import { usePathname } from "next/navigation";


export default function CatalogoPage() {

  const pathId = usePathname().toLowerCase().split("/")[2];
  const foundProduct = catalogo.find((prod) => prod.nombre.toLowerCase() === pathId);

  if (!foundProduct) {
    return <p>Producto no encontrado.</p>;
  }
  return (
      <section className="mt-16">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-secondary font-bold text-3xl md:text-5xl my-10 text-center mx-auto">{foundProduct.titulo} por<strong className='font-oxanium'> Blüm</strong></h1>
          <p className="font-aileron font-normal text-base mb-4">{foundProduct.parrafo}</p>
          {foundProduct.productos.map((producto) => (
            <Card producto={producto}/>
          ))}
        </div>
        <Catalogo/>
      </section>
  )
}