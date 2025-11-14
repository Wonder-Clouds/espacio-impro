'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Todas las imágenes disponibles (17 fotos reales) con variedad de tamaños
  const imagenes = [
    // Horizontales (ratio > 1.2) - más anchas
    { src: '/images/Foto-106.jpg', alt: 'Improvisación teatral en acción', ratio: 'wide' }, // 3000x2000 = 1.5
    { src: '/images/Foto-12.jpg', alt: 'Momento de presentación', ratio: 'wide' }, // 3000x2000 = 1.5
    { src: '/images/Foto-123.jpg', alt: 'Trabajo en equipo', ratio: 'square' }, // 3000x2000 = 1.5
    { src: '/images/Foto-13.jpg', alt: 'Escena de impro', ratio: 'square' }, // 3000x2000 = 1.5
    { src: '/images/Foto-137.jpg', alt: 'Comunidad teatral', ratio: 'wide' }, // 3000x2000 = 1.5
    { src: '/images/Foto-14.jpg', alt: 'Expresión artística', ratio: 'square' }, // 3000x2000 = 1.5
    { src: '/images/Foto-161.jpg', alt: 'Performance grupal', ratio: 'wide' }, // 3000x2000 = 1.5
    { src: '/images/Foto-23.jpg', alt: 'Creatividad colectiva', ratio: 'square' }, // 4940x3952 = 1.25
    { src: '/images/Foto-27.jpg', alt: 'Energía escénica', ratio: 'square' }, // 4177x3342 = 1.25
    { src: '/images/Foto-3.jpg', alt: 'Momentos de conexión', ratio: 'square' }, // 3632x2906 = 1.25
    { src: '/images/Foto-37.jpg', alt: 'Arte en movimiento', ratio: 'square' }, // 3072x2458 = 1.25
    { src: '/images/Foto-6.jpg', alt: 'Exploración teatral', ratio: 'square' }, // 2795x2268 = 1.23
    { src: '/images/Foto-7.jpg', alt: 'Juego escénico', ratio: 'wide' }, // 3000x2000 = 1.5
    
    // Casi cuadradas (ratio ~1) - verticales
    { src: '/images/sin título-4269.jpg', alt: 'Encuentro artístico', ratio: 'tall' }, // 3535x3628 = 0.97 (VERTICAL!)
    { src: '/images/sin título-4295.jpg', alt: 'Experiencia teatral', ratio: 'tall' }, // 3558x3756 = 0.95 (VERTICAL!)
    { src: '/images/sin título-4311.jpg', alt: 'Diversión y aprendizaje', ratio: 'square' }, // 3965x3767 = 1.05
    { src: '/images/sin título-4330.jpg', alt: 'Espacio creativo', ratio: 'square' } // 4058x3922 = 1.03
  ];

export default function GaleriaMasonry() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gris-50 pt-32 md:pt-40 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 
            className="font-lovelo text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{ color: '#117cb2' }}
          >
            GALERÍA
          </h1>
          <p className="font-gliker text-xl md:text-2xl text-gris-700 italic">
            Momentos que construyen nuestra historia
          </p>
        </motion.div>

        {/* Grid Masonry con CSS Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {imagenes.map((imagen, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${
                imagen.ratio === 'big' ? 'col-span-2 row-span-2' :
                imagen.ratio === 'tall' ? 'row-span-2' :
                imagen.ratio === 'wide' ? 'col-span-2' :
                ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.img
            src={imagenes[selectedImage].src}
            alt={imagenes[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
}
