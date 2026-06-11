# Juan David Garcia Jimenez - Portafolio Profesional

Portafolio web interactivo desarrollado con **React + Vite**, estilizado con **CSS puro** y animado con **Framer Motion** y **GSAP**. Un diseño minimalista, moderno y elegante enfocado en tonalidades negro, gris y blanco.

## 🚀 Tecnologías Utilizadas

- **Core**: React 19, JavaScript (ES6+), HTML5, CSS3.
- **Animaciones**: Framer Motion (revelados al hacer scroll, transiciones de tabs) y GSAP (efecto de scramble de texto, cursor interactivo magnético).
- **Iconografía**: Lucide React.
- **Entorno**: Vite (construcción ultra-rápida y HMR).
- **Despliegue**: GitHub Actions (Integración y Despliegue Continuo - CI/CD).

## 🛠️ Comandos de Desarrollo

En la raíz del proyecto, puedes ejecutar:

### `npm run dev`
Inicia el servidor de desarrollo en modo local (generalmente en `http://localhost:5173`).

### `npm run build`
Compila la aplicación para producción en la carpeta `dist/`. Prepara el bundle optimizado y minificado.

### `npm run preview`
Permite previsualizar localmente la compilación de producción.

## 📦 Estructura de Carpetas

```text
├── .github/workflows/deploy.yml  # Flujo de despliegue continuo a GitHub Pages
├── public/                       # Activos públicos (imágenes, iconos, favicon)
├── src/
│   ├── components/               # Componentes modulares (Navbar, Hero, Skills, etc.)
│   ├── data/                     # Datos estáticos del portafolio (portfolio.js)
│   ├── hooks/                    # Animaciones reutilizables y ganchos personalizados
│   ├── App.jsx                   # Componente raíz
│   ├── index.css                 # Estilos globales y variables de diseño (tokens)
│   └── main.jsx                  # Punto de entrada de React
├── index.html                    # Plantilla HTML principal
└── vite.config.js                # Configuración del entorno de Vite
```
