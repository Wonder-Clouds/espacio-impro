# 🎭 Espacio Impro - Página de Inicio

## ✅ Componentes Implementados

### 1. **Hero Principal** (`Hero.tsx`)
- Título "ESPACIO IMPRO" con animación de entrada
- Frases rotativas con efecto fade (9 frases del manifiesto)
- Botón "Contáctanos" con hover animado
- Logo con partículas flotantes de fondo
- Diseño responsive en grid de 2 columnas

### 2. **Principios** (`Principios.tsx`)
- Diseño tipo bento grid con 3 bloques
- **Me Permito** / **Pertenezco** / **Profundizo**
- Hover para expandir descripción
- Efecto de elevación al pasar el mouse
- Placeholders para íconos

### 3. **Manifiesto** (`Manifiesto.tsx`)
- 3 frases que rotan cada 4 segundos:
  - "Decimos sí al riesgo de vivir con presencia"
  - "Decimos sí a la creación compartida"
  - "Decimos sí al misterio de transformarnos improvisando"
- Fondo con textura sutil
- Indicadores interactivos

### 4. **Sección de Contacto** (`ContactSection.tsx`)
- **Izquierda**: Texto poético sobre la comunidad
- **Derecha**: Formulario de contacto (nombre, correo, mensaje)
- Carrusel de fotos circulares del elenco (5 placeholders)
- Diseño responsive en 2 columnas

### 5. **Botón WhatsApp** (`WhatsAppButton.tsx`)
- Flotante en esquina inferior derecha
- Color verde WhatsApp oficial (#25D366)
- Efecto de pulsación continua
- Siempre visible con z-index alto

## 🎨 Estilo y Animaciones

- **TailwindCSS v4** para toda la maquetación
- **Framer Motion** para animaciones suaves
- **Tipografías**:
  - Lovelo (títulos principales)
  - Gliker (subtítulos)
  - Inter (texto base)
- **Colores**:
  - Gris-50 (#f2f2f2) - Fondo
  - Lavanda (#6c648b) - Acentos
  - Carmín (#ff657a) - CTAs
  - Acero (#117cb2) - Alternativo

## 📦 Estructura de Archivos

```
src/
├── components/
│   └── home/
│       ├── Hero.tsx
│       ├── Principios.tsx
│       ├── Manifiesto.tsx
│       ├── ContactSection.tsx
│       └── WhatsAppButton.tsx
├── pages/
│   └── index.astro (integra todos los componentes)
└── assets/
    └── icons/
        └── rocket.astro (actualizado con props)
```

## 🚀 Uso

Todos los componentes se cargan con `client:load` en `index.astro`:

```astro
<Hero client:load />
<Principios client:load />
<Manifiesto client:load />
<ContactSection client:load />
<WhatsAppButton client:load />
```

## 🔧 Pendiente

1. Reemplazar placeholders de íconos en Principios
2. Agregar fotos reales del elenco en ContactSection
3. Configurar el número de WhatsApp real
4. Conectar el formulario de contacto con backend/email
5. Agregar el logo real de Espacio Impro

## 📱 Responsive

Todos los componentes son completamente responsive:
- Mobile: Vista de 1 columna
- Desktop: Grids de 2-3 columnas según el componente
- Animaciones optimizadas para touch devices
