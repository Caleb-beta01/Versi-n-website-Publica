# Publicación en GitHub Pages

## Fuente de verdad

El repositorio privado contiene el desarrollo y la validación. Este repositorio contiene la versión pública activa.

## Flujo de publicación

1. Validar la candidata en el repositorio privado.
2. Confirmar que la versión, el manifiesto y el service worker usan el mismo identificador.
3. Copiar los archivos aprobados a una rama de publicación.
4. Abrir y revisar un pull request.
5. Fusionar en `main`.
6. Verificar GitHub Pages, la instalación PWA y el modo sin conexión.
7. Conservar un respaldo recuperable de la versión sustituida.

## Reglas de la raíz

Deben permanecer en la raíz únicamente:

- `index.html`.
- El manifiesto activo.
- El service worker activo.
- `.nojekyll`, `README.md`, `LICENSE`.
- Directorios de recursos necesarios.

Los artefactos históricos deben pasar a `backups/` únicamente después de comprobar que no estén referenciados por `index.html`, el manifiesto o el service worker activo.

## Reversión

Si una publicación falla, restaurar la última combinación validada de `index.html`, manifiesto, service worker e iconos. No mezclar archivos de versiones distintas.
