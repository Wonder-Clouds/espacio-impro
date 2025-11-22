'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Todas las imágenes disponibles (17 fotos reales) con variedad de tamaños
const imagenes = [
  // Horizontales (más anchas)
  { src: '/images/galeria/11_20240402_123130_0000.webp', alt: 'Escena teatral', ratio: 'wide' },
  { src: '/images/galeria/Foto-37.webp', alt: 'Improvisación escénica', ratio: 'wide' },
  { src: '/images/galeria/IMG-20250220-WA0061.webp', alt: 'Momento de presentación', ratio: 'square' },
  { src: '/images/galeria/IMG_9951.webp', alt: 'Trabajo en equipo', ratio: 'wide' },
  { src: '/images/galeria/1730222664204.webp', alt: 'Expresión artística', ratio: 'tall' },
  { src: '/images/galeria/Foto-42.webp', alt: 'Creatividad en acción', ratio: 'portrait' },
  { src: '/images/galeria/IMG_20250315_190214.webp', alt: 'Performance grupal', ratio: 'wide' },
  { src: '/images/galeria/IMG_9964.webp', alt: 'Energía escénica', ratio: 'square' },
  { src: '/images/galeria/1741538025511.webp', alt: 'Escena de teatro', ratio: 'wide' },
  { src: '/images/galeria/Foto-50.webp', alt: 'Arte en movimiento', ratio: 'portrait' },
  { src: '/images/galeria/IMG-20250321-WA0002.webp', alt: 'Momentos de conexión', ratio: 'square' },
  { src: '/images/galeria/marcos y gaby día 2.webp', alt: 'Juego escénico', ratio: 'wide' },

  // Verticales / casi cuadradas
  { src: '/images/galeria/1741538025696.webp', alt: 'Encuentro artístico', ratio: 'tall' },
  { src: '/images/galeria/Foto-53.webp', alt: 'Experiencia teatral', ratio: 'portrait' },
  { src: '/images/galeria/IMG_20250329_172857.webp', alt: 'Diversión y aprendizaje', ratio: 'square' },
  { src: '/images/galeria/sin título-4268.webp', alt: 'Espacio creativo', ratio: 'tall' },
  { src: '/images/galeria/1741538026100.webp', alt: 'Arte en acción', ratio: 'portrait' },
  { src: '/images/galeria/Foto-57.webp', alt: 'Improvisación grupal', ratio: 'square' },
  { src: '/images/galeria/IMG_20250404_173519.webp', alt: 'Momentos escénicos', ratio: 'wide' },
  { src: '/images/galeria/sin título-4292.webp', alt: 'Performance teatral', ratio: 'tall' },
  { src: '/images/galeria/DANI presentador.webp', alt: 'Presentación artística', ratio: 'portrait' },
  { src: '/images/galeria/Foto-5.webp', alt: 'Creatividad colectiva', ratio: 'wide' },
  { src: '/images/galeria/IMG-20250404-WA0026.webp', alt: 'Juego escénico', ratio: 'square' },
  { src: '/images/galeria/sin título-4311.webp', alt: 'Expresión y diversión', ratio: 'portrait' },
  { src: '/images/galeria/Dani.webp', alt: 'Improvisación teatral', ratio: 'tall' },
  { src: '/images/galeria/Foto-64.webp', alt: 'Arte escénico', ratio: 'wide' },
  { src: '/images/galeria/IMG-20250525-WA0113.webp', alt: 'Momentos creativos', ratio: 'square' },
  { src: '/images/galeria/sin título-4326.webp', alt: 'Performance en grupo', ratio: 'portrait' },
  { src: '/images/galeria/Dia 2 Carol.webp', alt: 'Escena divertida', ratio: 'square' },
  { src: '/images/galeria/Foto-69.webp', alt: 'Juego teatral', ratio: 'wide' },
  { src: '/images/galeria/IMG_20250718_203035.webp', alt: 'Arte y movimiento', ratio: 'portrait' },
  { src: '/images/galeria/WhatsApp Image 2025-06-13 at 9.55.17 AM (1).webp', alt: 'Creatividad en escena', ratio: 'square' },
  { src: '/images/galeria/DSC04135.webp', alt: 'Escena de improvisación', ratio: 'wide' },
  { src: '/images/galeria/Foto-75.webp', alt: 'Performance grupal', ratio: 'portrait' },
  { src: '/images/galeria/IMG-20250724-WA0001.webp', alt: 'Momento teatral', ratio: 'tall' },
  { src: '/images/galeria/WhatsApp Image 2025-06-13 at 9.55.17 AM (2).webp', alt: 'Expresión artística', ratio: 'square' },
  { src: '/images/galeria/DSC04204.webp', alt: 'Escena escénica', ratio: 'portrait' },
  { src: '/images/galeria/FOTOS SONDER_20240814_140957_0000.webp', alt: 'Arte y creatividad', ratio: 'wide' },
  { src: '/images/galeria/IMG_20250829_195454.webp', alt: 'Improvisación teatral', ratio: 'square' },
  { src: '/images/galeria/WhatsApp Image 2025-06-13 at 9.55.21 AM (3).webp', alt: 'Performance grupal', ratio: 'portrait' },
  { src: '/images/galeria/DSC04216.webp', alt: 'Arte escénico', ratio: 'tall' },
  { src: '/images/galeria/FOTOS SONDER_20240814_140957_0001.webp', alt: 'Momento creativo', ratio: 'square' },
  { src: '/images/galeria/IMG_20250829_200500.webp', alt: 'Juego teatral', ratio: 'wide' },
  { src: '/images/galeria/WhatsApp Image 2025-06-15 at 8.29.02 AM (1).webp', alt: 'Creatividad en escena', ratio: 'portrait' },
  { src: '/images/galeria/FOTOS SONDER_20240814_140957_0004.webp', alt: 'Expresión artística', ratio: 'wide' },
  { src: '/images/galeria/IMG_20250829_202059.webp', alt: 'Improvisación teatral', ratio: 'square' },
  { src: '/images/galeria/WhatsApp Image 2025-07-20 at 6.42.41 PM (1).webp', alt: 'Performance grupal', ratio: 'portrait' },
  { src: '/images/galeria/FOTOS SONDER_20240814_140957_0006.webp', alt: 'Arte escénico', ratio: 'wide' },
  { src: '/images/galeria/IMG_20250829_203304.webp', alt: 'Momentos creativos', ratio: 'tall' },
  { src: '/images/galeria/WhatsApp Image 2025-07-20 at 6.42.45 PM (2).webp', alt: 'Escena teatral', ratio: 'portrait' },
  { src: '/images/galeria/Foto-169.webp', alt: 'Improvisación escénica', ratio: 'square' },
  { src: '/images/galeria/Foto.webp', alt: 'Arte en acción', ratio: 'wide' }
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
