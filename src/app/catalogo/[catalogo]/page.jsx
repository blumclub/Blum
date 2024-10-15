/* eslint-disable @next/next/no-img-element */
'use client'
import PorcentajeAnimado from "@/Componentes/Porcentaje/Porcentaje";
// import Servicio from "@/components/Servicio/Servicio";
import { usePathname } from "next/navigation";
import { Fade } from "react-awesome-reveal";


const catalogo = [
    {
      "nombre": "aceites",
      "productos": [
        {
          "id": 1,
          "nombre": "Aceite de cannabis 10%",
          "descripcion": "Aceite con una concentración de 10% de CBD. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis aliquam vero quas at nemo omnis quod, veniam necessitatibus, alias, illo quo cumque officiis nobis temporibus nisi! Laborum, veniam perferendis.",
          "cbd": "10",
          "sativa": "70",
          "indica": "30",
          "recomendadoPara": ["Dolor", "Inflamación", "Artritis"],
          "efectos": ["Eufórico", "Motivado", "Relajado"],
          "perfilTerpenos": {
            "especiado": "Cariofileno",
            "terroso": "Humuleno",
            "floral1": "Ocimeno",
            "floral2": "Terpinoleno"
          },
          "sabor": ["Cítrico", "Terroso", "Herbario", "Pimienta"],
          "imagen": "https://clubcannabicobuenosaires.com/wp-content/uploads/2023/12/CCBA-IG-17-2.webp" // Agrega la URL de la imagen aquí
        },
        {
          "id": 2,
          "nombre": "Aceite de cannabis 20%",
          "descripcion": "Aceite con una concentración de 20% de CBD.",
          "cbd": "20",
          "sativa": "60",
          "indica": "40",
          "recomendadoPara": ["Dolor", "Estrés"],
          "efectos": ["Relajado", "Calmado"],
          "perfilTerpenos": {
            "especiado": "Cariofileno",
            "terroso": "Humuleno",
            "floral1": "Ocimeno",
            "floral2": "Terpinoleno"
          },
          "sabor": ["Frutal", "Terroso"],
          "imagen": "https://clubcannabicobuenosaires.com/wp-content/uploads/2023/12/CCBA-IG-17-2.webp" // Agrega la URL de la imagen aquí
        }
      ]
    },
    {
      "nombre": "cogollos",
      "productos": [
        {
          "id": 3,
          "nombre": "Cogollo Amnesia Haze",
          "descripcion": "Cogollo de Amnesia Haze con alto contenido de THC.",
          "cbd": "0.3",
          "sativa": "100",
          "indica": "0",
          "recomendadoPara": ["Estrés", "Ansiedad"],
          "efectos": ["Eufórico", "Creativo"],
          "perfilTerpenos": {
            "especiado": "Cariofileno",
            "terroso": "Humuleno",
            "floral1": "Ocimeno",
            "floral2": "Terpinoleno"
          },
          "sabor": ["Dulce", "Cítrico"],
          "imagen": "URL_de_la_imagen_3.jpg" // Agrega la URL de la imagen aquí
        },
        {
          "id": 4,
          "nombre": "Cogollo Blue Dream",
          "descripcion": "Cogollo de Blue Dream con balance de THC y CBD.",
          "cbd": "0.5",
          "sativa": "50",
          "indica": "50",
          "recomendadoPara": ["Dolor", "Estrés"],
          "efectos": ["Eufórico", "Calmado"],
          "perfilTerpenos": {
            "especiado": "Cariofileno",
            "terroso": "Humuleno",
            "floral1": "Ocimeno",
            "floral2": "Terpinoleno"
          },
          "sabor": ["Dulce", "Terroso"],
          "imagen": "URL_de_la_imagen_4.jpg" // Agrega la URL de la imagen aquí
        }
      ]
    },
    {
      "nombre": "unguentos",
      "productos": [
        {
          "id": 5,
          "nombre": "Ungüento con CBD",
          "descripcion": "Ungüento para uso tópico con CBD para aliviar el dolor.",
          "cbd": "5",
          "sativa": "0",
          "indica": "0",
          "recomendadoPara": ["Dolor", "Inflamación"],
          "efectos": ["Calmante"],
          "perfilTerpenos": {
            "especiado": "Cariofileno",
            "terroso": "Humuleno",
            "floral1": "Ocimeno",
            "floral2": "Terpinoleno"
          },
          "sabor": ["Terroso"],
          "imagen": "URL_de_la_imagen_5.jpg" // Agrega la URL de la imagen aquí
        },
        {
          "id": 6,
          "nombre": "Ungüento con árnica y cannabis",
          "descripcion": "Ungüento con árnica y extracto de cannabis.",
          "cbd": "7",
          "sativa": "0",
          "indica": "0",
          "recomendadoPara": ["Dolor", "Inflamación"],
          "efectos": ["Calmante", "Relajante"],
          "perfilTerpenos": {
            "especiado": "Cariofileno",
            "terroso": "Humuleno",
            "floral1": "Ocimeno",
            "floral2": "Terpinoleno"
          },
          "sabor": ["Terroso"],
          "imagen": "URL_de_la_imagen_6.jpg" // Agrega la URL de la imagen aquí
        }
      ]
    }
  ];
  
  
  

export default function ProductosPage() {

    const pathId = usePathname().toLowerCase().split('/')[2];
    console.log(pathId);
  
    const foundProduct = catalogo.find(
      (prod) => prod.nombre.toLowerCase() === pathId || prod.nombre.toLowerCase() === pathId
    );
  
    if (!foundProduct) {
      return <p>Producto no encontrado.</p>;
    }
  
    return (
      <section className="mt-28">
        <div className="max-w-7xl mx-auto p-4">
          {foundProduct.productos.map((producto) => {
            // Animaciones para cada porcentaje
        
  
            return (
              
                <Fade
                key={producto.id}
                direction={"right"}
                delay={100}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
              <div
                key={producto.id}
                className="bg-gray-50 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mb-8"
              >
                {/* Imagen a la izquierda */}
                <div className="md:w-1/2">
                  <img
                    className="w-full h-full object-contain "
                    src={producto.imagen} // Reemplaza con la imagen del producto
                    alt={producto.nombre}
                  />
                </div>

                {/* Información del producto a la derecha */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-50 text-gray-800">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 mt-4 leading-relaxed text-lg">
                    {producto.descripcion}
                  </p>

                  {/* Animación de porcentajes */}
                  <PorcentajeAnimado producto={producto} />

                  {/* Información adicional */}
                  <div className="grid grid-cols-2 gap-3    p-1">
                    {/* Recomendado para */}
                    <div className="bg-white rounded-lg p-3">
                      <h3 className="text-xl font-bold text-secondary border-b-2 border-gray-300 pb-2 mb-2">
                        Recomendado para:
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        {producto.recomendadoPara.map(
                          (recomendacion, index) => (
                            <li key={index} className="text-lg text-gray-700">
                              {recomendacion}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Efectos */}
                    <div className="bg-white rounded-lg p-3">
                      <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-2">
                        Efectos
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        {producto.efectos.map((efecto, index) => (
                          <li key={index} className="text-lg text-gray-700">
                            {efecto}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Perfil de Terpenos */}
                    <div className="bg-white rounded-lg p-3 my-6">
                      <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                        Perfil de Terpenos
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li className="text-lg text-gray-700">
                          Especiado:{" "}
                          <span className="font-semibold">
                            {producto.perfilTerpenos.especiado}
                          </span>
                        </li>
                        <li className="text-lg text-gray-700">
                          Terroso:{" "}
                          <span className="font-semibold">
                            {producto.perfilTerpenos.terroso}
                          </span>
                        </li>
                        <li className="text-lg text-gray-700">
                          Floral 1:{" "}
                          <span className="font-semibold">
                            {producto.perfilTerpenos.floral1}
                          </span>
                        </li>
                        <li className="text-lg text-gray-700">
                          Floral 2:{" "}
                          <span className="font-semibold">
                            {producto.perfilTerpenos.floral2}
                          </span>
                        </li>
                      </ul>
                    </div>
                    {/* Sabor */}
                    <div className="bg-white rounded-lg p-3 my-6">
                      <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                        Sabor
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        {producto.sabor.map((sabor, index) => (
                          <li key={index} className="text-lg text-gray-700">
                            {sabor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              </Fade>


            );
          })}
        </div>
      </section>
    );
  }