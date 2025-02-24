"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"
import fetchProducts from "../../Hook/fetchProducts"
import Loading from "../Loading/Loading"

export function ProductCarousel() {
  const carouselRef = useRef(null)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-secondary to-primary">
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 mx-2 ${products.length < 1?' hidden':''}`}>
        <Button variant="outline" size="icon" className="rounded-full bg-secondary shadow-lg" onClick={() => scroll("left")} >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <div ref={carouselRef} className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar justify-center" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {loading 
          ?<Loading />
          : Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.idProducto} product={product} />
              ))
          ) : (
          <p className="text-center text-gray-500">No hay productos disponibles.</p>
        )}
      </div>
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 mx-2 ${products.length < 1?' hidden':'block'}`}>
        <Button variant="outline" size="icon" className="rounded-full bg-secondary shadow-lg"  onClick={() => scroll("right")} >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export function ProductCard({ product }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white min-w-[280px] mx-2">
      <div className="relative h-48 w-full">
        <Image
          src={product.Imagen || "/placeholder.svg"}
          alt={product.NombreProducto}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.NombreProducto}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.Descripcion}</p>
        <p className="mt-2 text-xl font-bold text-primary">${product.Precio}</p>
      </div>
    </div>
  );
}
