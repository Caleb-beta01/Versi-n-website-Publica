# Calculadora de Inflación

Repositorio público y desplegable de la Calculadora de Inflación.

- Versión activa: **v0.18.0-Beta**
- Canal: **Beta**
- Despliegue: **GitHub Pages**
- Desarrollo y QA: repositorio privado `Caleb-beta01/Calculadora-de-Inflaci-n-app`

## Raíz de producción

La raíz se mantiene compatible con las rutas relativas de GitHub Pages y la PWA. Los archivos activos son:

- `index.html`: entrada del sitio y copia exacta de la versión activa.
- `v0.18.0-Beta.html`: candidata fija de la versión activa.
- `manifest-v0.18.0-beta.webmanifest`: manifiesto PWA activo.
- `sw-v0.18.0-beta.js`: service worker activo.
- `icons/`: iconos requeridos por la PWA.
- `.nojekyll`, `README.md` y `LICENSE`.
- `docs/`: documentación de publicación.

Los artefactos de versiones anteriores permanecen disponibles como historial recuperable. No deben combinarse archivos de versiones distintas: una reversión debe usar un conjunto coherente de HTML, manifiesto y service worker.

Consulta `docs/DEPLOYMENT.md` antes de publicar o revertir una versión.

## Licencia

Consulta `LICENSE`.
