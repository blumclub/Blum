import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PorcentajeAnimado({ producto }) {
  // Estado para almacenar los porcentajes animados
  const [cbd, setCbd] = useState(0);
  const [sativa, setSativa] = useState(0);
  const [indica, setIndica] = useState(0);

  useEffect(() => {
    // Iniciar las animaciones cuando el componente monte
    const duration = 8000; // Duración de la animación en milisegundos

    // Función para animar cada propiedad
    const animateValue = (setValue, toValue) => {
      let startValue = 0;
      const increment = toValue / (duration / 100); // Incremento por cada intervalo

      const animate = () => {
        if (startValue < toValue) {
          startValue += increment;
          setValue(Math.min(startValue, toValue));
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    // Llamar a la función de animación para cada propiedad
    animateValue(setCbd, producto.cbd);
    animateValue(setSativa, producto.sativa);
    animateValue(setIndica, producto.indica);
  }, [producto]);

  return (
    <div className="bg-white p-2 mb-2 flex flex-col md:flex-row">
      {/* Animaciones de las propiedades */}
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center space-y-2">
          <motion.p className="text-sm font-semibold text-green transition duration-300 ease-in-out transform hover:scale-105">
            CBD: {Math.round(cbd)}%
          </motion.p>
          <div className="h-1 w-20 bg-green rounded-full" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <motion.p className="text-sm font-semibold text-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            Sativa: {Math.round(sativa)}%
          </motion.p>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <motion.p className="text-sm font-semibold text-purple-600 transition duration-300 ease-in-out transform hover:scale-105">
            Indica: {Math.round(indica)}%
          </motion.p>
          <div className="h-1 w-20 bg-purple rounded-full" />
        </div>
      </div>
    </div>
  );
}
