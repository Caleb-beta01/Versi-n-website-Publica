# Publicación en GitHub Pages

## Fuente de verdad

El repositorio privado contiene desarrollo, backend, pruebas y QA. Este repositorio contiene exclusivamente la versión pública activa y su archivo histórico.

## Flujo de publicación

1. Validar la candidata en el repositorio privado.
2. Confirmar que HTML, versión visible, manifiesto y service worker pertenecen a la misma release.
3. Crear una rama `release/*` en este repositorio.
4. Copiar los artefactos aprobados manteniendo las rutas relativas requeridas.
5. Mover el conjunto sustituido a `archive/releases/` cuando deje de estar referenciado por el runtime activo.
6. Abrir y revisar un pull request.
7. Fusionar en `main`.
8. Verificar GitHub Pages, instalación PWA y modo offline.

## Regla de la raíz

La raíz es producción. Deben permanecer allí solamente los archivos que usa GitHub Pages, los recursos activos y la documentación esencial.

Antes de mover un archivo fuera de la raíz, comprobar referencias desde:

- `index.html`.
- manifiesto activo.
- service worker activo.

## Estructura histórica

- `archive/backups/`: copias recuperables antiguas.
- `archive/releases/alpha/`: HTML históricos Alpha.
- `archive/releases/beta/html/`: HTML Beta sustituidos.
- `archive/releases/beta/manifests/`: manifiestos PWA sustituidos.
- `archive/releases/beta/service-workers/`: service workers sustituidos.

## Reversión

Restaurar siempre un conjunto validado de la misma versión. No mezclar un `index.html` de una versión con un manifiesto o service worker de otra.

Después de revertir, comprobar navegación, caché offline, instalación PWA, iconos y versión visible.