'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Array con todas las imágenes disponibles
const todasLasImagenes = [
  'Foto-106.jpg',
  'Foto-12.jpg',
  'Foto-123.jpg',
  'Foto-13.jpg',
  'Foto-137.jpg',
  'Foto-14.jpg',
  'Foto-161.jpg',
  'Foto-23.jpg',
  'Foto-27.jpg',
  'Foto-3.jpg',
  'Foto-37.jpg',
  'Foto-6.jpg',
  'Foto-7.jpg',
  'sin título-4269.jpg',
  'sin título-4295.jpg',
  'sin título-4311.jpg',
  'sin título-4330.jpg'
];

// Función para seleccionar imágenes aleatorias
function seleccionarImagenesAleatorias(cantidad: number) {
  const mezcladas = [...todasLasImagenes].sort(() => Math.random() - 0.5);
  return mezcladas.slice(0, cantidad);
}

export default function CarouselComunidad() {
  const [imagenesSeleccionadas] = useState(() => seleccionarImagenesAleatorias(8));
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imagenesSeleccionadas.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imagenesSeleccionadas.length) % imagenesSeleccionadas.length);
  };

  // Auto-avance cada 4 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [imagenesSeleccionadas.length]);

  return (
    <section className="py-20 bg-gris-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="font-lovelo text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{ color: '#117cb2' }}
          >
            NUESTRA COMUNIDAD
          </h2>
          <p className="font-gliker text-xl md:text-2xl text-gris-700 italic">
            Momentos que nos definen
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={`/images/${imagenesSeleccionadas[currentImage]}`}
                  alt="Comunidad Espacio Impro"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>

              {/* Controles del carousel */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gris-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6 text-gris-800" />
              </button>

              {/* Indicadores de posición */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {imagenesSeleccionadas.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-white w-8' 
                        : 'bg-white/60 w-2 hover:bg-white/80'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
