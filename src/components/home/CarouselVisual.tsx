'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const frases = [
  "Actuar es investigación.",
  "Actuar es comunidad.",
  "Actuar es memoria.",
  "Actuar es riesgo.",
  "Actuar es libertad.",
  "Actuar es presente.",
  "Actuar es descubrir.",
  "Actuar es jugar."
];

// Lista de imágenes con mejor relación de aspecto para el carrusel (horizontales 3:2)
const todasLasImagenes = [
  'Foto-106.jpg',    // 3000x2000
  'Foto-12.jpg',     // 3000x2000
  'Foto-123.jpg',    // 3000x2000
  'Foto-13.jpg',     // 3000x2000
  'Foto-137.jpg',    // 3000x2000
  'Foto-14.jpg',     // 3000x2000
  'Foto-161.jpg',    // 3000x2000
  'Foto-7.jpg',      // 3000x2000
  'Foto-23.jpg',     // 4940x3952 (más cuadrada pero incluida)
  'Foto-27.jpg',     // 4177x3342
  'Foto-3.jpg',      // 3632x2906
  'Foto-37.jpg',     // 3072x2458
  'Foto-6.jpg'       // 2795x2268
];

// Seleccionar 5 imágenes aleatorias para el carousel
const seleccionarImagenesAleatorias = () => {
  const shuffled = [...todasLasImagenes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
};

// Imágenes seleccionadas para esta sesión
const imagenesCarousel = seleccionarImagenesAleatorias();

export default function CarouselVisual() {
  const [currentFrase, setCurrentFrase] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % imagenesCarousel.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + imagenesCarousel.length) % imagenesCarousel.length);
  };

  // Cambiar frase cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrase((prev) => (prev + 1) % frases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-avance de imágenes cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagenesCarousel.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 pb-6 md:pt-32 md:pb-8 bg-white relative overflow-hidden">
      {/* Título y texto - con container */}
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-lovelo text-4xl md:text-5xl lg:text-6xl mb-6" style={{ color: '#117cb2' }}>
            IMPROVISAMOS DESDE EL PRESENTE
          </h2>
          <p className="font-inter text-lg md:text-xl text-gris-700 max-w-3xl mx-auto leading-relaxed">
            Cada creación es distinta, pero todas comparten:
            <strong> la escucha colectiva, el cuerpo disponible y el descubrir.</strong>
          </p>

          {/* Frases animadas */}
          <div className="mt-12 mb-16 md:mb-20 min-h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentFrase}
                className="font-gliker text-3xl md:text-4xl lg:text-5xl text-lavanda text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {frases[currentFrase]}
              </motion.h3>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Carrusel con padding y contenedor */}
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="h-[400px] md:h-[500px] lg:h-[600px] bg-gris-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="w-full h-full"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src={`/images/${imagenesCarousel[currentImage]}`} 
                  alt="Espacio Impro en acción"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>

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

          {/* Indicadores */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {imagenesCarousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white w-12 shadow-lg' 
                  : 'bg-white/50 w-2 hover:bg-white/70'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
