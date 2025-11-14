# Guía Tipográfica - Espacio Impro

## 🎨 Fuentes Configuradas

### Lovelo
**Uso:** Encabezados H1, H2, logos, títulos principales  
**Clase Tailwind:** `font-lovelo`  
**Pesos disponibles:** 300 (Light), 700 (Bold), 900 (Black)

### Gliker
**Uso:** Subtítulos (H3), textos expresivos, destacados  
**Clase Tailwind:** `font-gliker`  
**Peso:** 600 (Semibold)

### Inter
**Uso:** Texto base, UI, párrafos, navegación  
**Clase Tailwind:** `font-inter`  
**Pesos disponibles:** 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)

### Manrope
**Uso:** Alternativa para texto base  
**Clase Tailwind:** `font-manrope`  
**Pesos disponibles:** 200, 300, 400, 500, 600, 700, 800

## 🎯 Jerarquía Tipográfica

### H1 / H2 - Títulos Principales
```html
<h1 class="font-lovelo text-h1 text-gris-800">
  Título Principal
</h1>
```
- **Fuente:** Lovelo Black (900)
- **Color:** `text-gris-800` (#2d2d2d) o `text-white` en fondos oscuros

### H3 - Subtítulos
```html
<h3 class="font-gliker text-h3 text-lavanda font-semibold">
  Subtítulo Expresivo
</h3>
```
- **Fuente:** Gliker Semibold
- **Color:** `text-lavanda` (#6c648b)

### H4, H5, H6 - Encabezados Secundarios
```html
<h4 class="font-inter text-h4 text-gris-800 font-semibold">
  Encabezado Secundario
</h4>
```
- **Fuente:** Inter Semibold
- **Color:** `text-gris-800`

### Párrafos / Texto Base
```html
<p class="font-inter text-body text-gris-800">
  Contenido del párrafo con buena legibilidad.
</p>
```
- **Fuente:** Inter Regular/Medium
- **Color:** `text-gris-800`

### Links / CTA / Botones
```html
<!-- Opción 1: Lovelo Black -->
<button class="font-lovelo bg-carmin text-white hover:bg-acero">
  Llamada a la Acción
</button>

<!-- Opción 2: Inter Bold -->
<a href="#" class="font-inter font-bold text-carmin hover:text-acero">
  Ver más
</a>
```
- **Fuente:** Lovelo Black o Inter Bold
- **Color:** `text-carmin` (#ff657a) o `text-acero` (#117cb2)

### Notas / Etiquetas / Caption
```html
<small class="font-inter text-caption font-light italic text-lavanda">
  Nota: Información adicional
</small>
```
- **Fuente:** Inter Light/Italic
- **Color:** `text-lavanda` o `text-dorado`

## 🎨 Paleta de Colores

### Lavanda (Púrpura)
```css
text-lavanda         → #6c648b (color principal - subtítulos)
text-lavanda-100     → #dcd9ec (muy claro)
text-lavanda-300     → #938dc7
text-lavanda-500     → #59527a
text-lavanda-700     → #322f56 (oscuro)
text-lavanda-900     → #0d0b33 (muy oscuro)
```

### Carmín (Rojo/Rosa)
```css
text-carmin          → #ff657a (CTAs, links, destacados)
text-carmin-100      → #ffd6db (muy claro)
text-carmin-300      → #ff8593
text-carmin-500      → #e05467
text-carmin-700      → #a53242 (oscuro)
text-carmin-900      → #6b111f (muy oscuro)
```

### Dorado (Amarillo)
```css
text-dorado          → #fed056 (notas, etiquetas, destacados)
text-dorado-100      → #fff1c2 (muy claro)
text-dorado-300      → #fedf7a
text-dorado-500      → #d9ac40
text-dorado-700      → #8d6614 (oscuro)
text-dorado-900      → #412300 (muy oscuro)
```

### Acero (Azul)
```css
text-acero           → #117cb2 (alternativa para CTAs)
text-acero-100       → #cce9f5 (muy claro)
text-acero-300       → #66bde1
text-acero-500       → #117cb2 (principal)
text-acero-700       → #0d577e (oscuro)
text-acero-900       → #08334a (muy oscuro)
```

### Gris
```css
text-gris            → #2d2d2d (texto principal)
text-gris-50         → #f2f2f2 (fondos claros)
text-gris-100        → #d9d9d9
text-gris-300        → #a6a6a6
text-gris-500        → #737373
text-gris-700        → #404040
text-gris-800        → #2d2d2d (texto principal)
text-gris-900        → #1a1a1a (muy oscuro)
```

### Colores de Fondo
```css
bg-lavanda           → Fondo púrpura
bg-carmin            → Fondo rojo/rosa
bg-dorado            → Fondo amarillo
bg-acero             → Fondo azul
bg-gris-50           → Fondo gris muy claro
bg-gris-800          → Fondo gris oscuro
```

## 📏 Tamaños de Texto

```css
text-h1        → 3.5rem (56px) - Lovelo Bold
text-h2        → 2.5rem (40px) - Lovelo Bold
text-h3        → 1.875rem (30px) - Gliker Semibold
text-h4        → 1.5rem (24px) - Inter Semibold
text-body-lg   → 1.125rem (18px) - Inter Regular/Medium
text-body      → 1rem (16px) - Inter Regular
text-body-sm   → 0.875rem (14px) - Inter Regular
text-caption   → 0.75rem (12px) - Inter Light
```

## 💡 Ejemplos Prácticos

### Hero Section
```html
<section class="bg-lavanda text-white">
  <h1 class="font-lovelo text-h1 mb-4">
    Bienvenido a Espacio Impro
  </h1>
  <p class="font-inter text-body-lg mb-8">
    Descripción clara y legible del proyecto
  </p>
  <button class="font-lovelo bg-carmin text-white px-8 py-3 rounded-lg hover:bg-acero">
    Comenzar
  </button>
</section>
```

### Tarjeta de Contenido
```html
<article class="bg-white p-6 rounded-lg shadow-lg">
  <h3 class="font-gliker text-h3 text-lavanda mb-2">
    Título de la Tarjeta
  </h3>
  <p class="font-inter text-body text-gris-800 mb-4">
    Contenido descriptivo de la tarjeta con información relevante.
  </p>
  <a href="#" class="font-inter font-bold text-carmin hover:text-acero">
    Leer más →
  </a>
</article>
```

### Formulario
```html
<form>
  <label class="font-inter text-body-sm font-medium text-gris-800 mb-2 block">
    Nombre completo
  </label>
  <input 
    type="text" 
    class="font-inter text-body w-full px-4 py-2 border border-gris-300 rounded-lg"
  />
  <small class="font-inter text-caption text-lavanda italic">
    * Campo obligatorio
  </small>
</form>
```

## ⚡ Tips de Uso

1. **Lovelo** es muy llamativa, úsala con moderación (solo títulos principales)
2. **Gliker** aporta personalidad, ideal para H3 y elementos destacados
3. **Inter** es tu fuente de trabajo para UI, párrafos y navegación
4. Mantén consistencia en los colores según la jerarquía establecida
5. Combina `font-bold` con `font-lovelo` o `font-inter` para CTAs
6. Usa `tracking-wide` con Inter para mejor legibilidad en textos pequeños

## 🚀 Clases de Ayuda

### Alias Semánticos
```css
font-heading     → font-lovelo (para encabezados)
font-subheading  → font-gliker (para subtítulos)
font-body        → font-inter (para texto base)
text-primary     → text-brand-dark
text-secondary   → text-brand-purple
```
