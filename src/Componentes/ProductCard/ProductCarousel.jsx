'use client'

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./button";
import fetchProducts from "../../Hook/fetchProducts";
import { userinfo } from "@/app/Constants/userinfo";
import SkelletonCard from "./SkelletonCard";
import { Fade } from "react-awesome-reveal";
import { ProductCard } from "./ProductCard";
import ProductModal from "./ProductModal";

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