"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./button";
import fetchProducts from "../../Hook/fetchProducts";
import ButtonWhats from "../Socials/ButtonWhats";
import { userinfo } from "@/app/Constants/userinfo";
import SkelletonCard from "./SkelletonCard";
import { Fade } from "react-awesome-reveal";

const CACHE_TIME = 10 * 60 * 1000; // 10 minutos en milisegundos

export function ProductCarousel() {
  const carouselRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      const cachedData = localStorage.getItem("products");
      const cachedTime = localStorage.getItem("productsTimestamp");

      if (cachedData && cachedTime && Date.now() - cachedTime < CACHE_TIME) {
        setProducts(JSON.parse(cachedData));
        setLoading(false);
      } else {
        const data = await fetchProducts();
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
        localStorage.setItem("productsTimestamp", Date.now());
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const navigateProduct = (direction) => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex((p) => p.idProducto === selectedProduct.idProducto);
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + products.length) % products.length
        : (currentIndex + 1) % products.length;
    setSelectedProduct(products[newIndex]);
  };

  return (
    <section className="bg-gradient-to-b from-secondary to-primary pb-10 scroll-mt-10 lg:scroll-mt-16">
      <article className="text-center mb-6">
          <Fade direction={"left"} delay={600} cascade damping={1e-1} triggerOnce={true}>
              <h2 className={`text-3xl lg:text-5xl font-aileron text-primary uppercase text-center`}>Productos de BLÜM </h2>
          </Fade>
      </article>
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 mx-2 ${products.length < 1 ? "hidden" : "block"}`}>
          <Button variant="outline" size="icon" className="rounded-full bg-secondary shadow-lg" onClick={() => scroll("left")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div ref={carouselRef} className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar justify-start pl-4 pr-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {loading ? (
            <>
            <SkelletonCard />
            <SkelletonCard />
            <SkelletonCard />
            <SkelletonCard />
            </>
          ) : Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.idProducto} product={product} userinfo={userinfo} onImageClick={() => openModal(product)} />
            ))
          ) : (
            <p className="text-center text-gray-500">No hay productos disponibles.</p>
          )}
        </div>
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 mx-2 ${products.length < 1 ? "hidden" : "block"}`}>
          <Button variant="outline" size="icon" className="rounded-full bg-secondary shadow-lg" onClick={() => scroll("right")}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} onNavigate={navigateProduct} />}
    </section>
  );
}


export function ProductCard({ product, userinfo, onImageClick }) {
  return (
    <div className="relative flex flex-col rounded-lg shadow-lg overflow-hidden bg-white min-w-[280px] mx-2">
      <div className="relative h-48 w-full cursor-pointer" onClick={onImageClick}>
        <Image
          src={product.Imagen || "/placeholder.svg"}
          alt={product.NombreProducto}
          fill
          className="object-cover"
          title={product.NombreProducto}
          aria-label={product.NombreProducto}
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

function ProductModal({ product, onClose, onNavigate }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white rounded-lg p-4 max-w-3xl w-full relative gap-4">
        <button className="absolute top-2 right-2  text-gray-700 hover:text-gray-900" onClick={onClose}>
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

        <div className="relative w-full h-80 md:h-96  mb-4">
          <Image
            src={product.Imagen || "/placeholder.svg"}
            alt={product.NombreProducto}
            fill
            className="object-contain"
            title={product.NombreProducto}
            aria-label={product.NombreProducto}
          />
        </div>

        {/* <p className="text-gray-700">{product.Descripcion}</p> */}
        <p className="text-gray-700">{product.DescripcionExt}</p>
        <p className="mt-2 text-xl font-bold text-primary">${product.Precio}</p>

        {userinfo?.contact?.phone && (
          <div className="mt-4 min-h-10 absolute bottom-4 right-4 z-20">
            <ButtonWhats
              contact={userinfo.contact.phone}
              textContact={`Hola, me interesa: ${product.NombreProducto}`}
              text={" Lo quiero"}
            />
          </div>
        )}
      </div>
    </div>
  );
}
