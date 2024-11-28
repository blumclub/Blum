import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PorcentajeAnimado({ producto = {}, estilo = '' }) {
  const [cbd, setCbd] = useState(0);
  const [sativa, setSativa] = useState(0);
  const [indica, setIndica] = useState(0);
  const [thc, setThc] = useState(0);

  useEffect(() => {
    const duration = 3000; // Shortened animation duration
    const animateValue = (setValue, toValue) => {
      let startValue = 0;
      const increment = toValue / (duration / 16); // Approx. 60 FPS

      const animate = () => {
        if (startValue < toValue) {
          startValue += increment;
          setValue(Math.min(startValue, toValue));
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    if (producto) {
      animateValue(setCbd, producto.cbd || 0);
      animateValue(setThc, producto.THC || 0);
      animateValue(setSativa, producto.sativa || 0);
      animateValue(setIndica, producto.indica || 0);
    }
  }, [producto]);

  if (!producto.cbd && !producto.THC && !producto.sativa && !producto.indica) return null;

  return (
    <div className={`rounded-xl ${estilo}`}>
      <div className="absolute inset-0 bg-black opacity-70 rounded-xl" />
      <div className="p-2 mb-2 flex flex-col md:flex-row relative z-10">
        <div className="flex justify-around w-full">
          {[
            { label: 'THC', value: thc, color: 'yellow-500' },
            { label: 'CBD', value: cbd.toFixed(2), color: 'green' },
            { label: 'Sativa', value: sativa, color: 'blue-400' },
            { label: 'Indica', value: indica, color: 'pink-500' },
          ].map(({ label, value, color }) => (
            <div key={label} className="flex flex-col items-center space-y-2">
              <motion.p
                className={`text-xs font-bold text-${color} transition duration-400 ease-in-out transform hover:scale-110 uppercase`}
              >
                {label}: {Math.round(value)}%
              </motion.p>
              <div className={`h-1 w-14 md:w-20 bg-${color} rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
