# Calculadora de Inflación

Repositorio público y desplegable de la Calculadora de Inflación.

- Versión activa: **v0.13.4-Beta-Patch**
- Canal: **Beta**
- Despliegue: **GitHub Pages**
- Desarrollo y QA: repositorio privado `Caleb-beta01/Calculadora-de-Inflaci-n-app`

## Raíz de producción

La raíz se mantiene deliberadamente pequeña porque GitHub Pages y la PWA usan rutas relativas. Los archivos activos son:

- `index.html`: entrada del sitio.
- `v0.13.4-Beta-Patch.html`: snapshot requerido por el service worker activo.
- `manifest-v0.13.4-beta-patch.webmanifest`: manifiesto PWA activo.
- `sw-v0.13.4-beta-patch.js`: service worker activo.
- `icons/`: iconos requeridos por la PWA.
- `.nojekyll`, `README.md` y `LICENSE`.
- `docs/`: documentación de publicación.

## Archivo histórico

Los artefactos sustituidos se conservan fuera de la raíz en `archive/`:

```text
archive/
├── backups/
└── releases/
    ├── alpha/
    └── beta/
        ├── html/
        ├── manifests/
        └── service-workers/
```

No se deben restaurar archivos individuales de versiones diferentes como una combinación. Una reversión debe usar un conjunto coherente de HTML, manifiesto, service worker e iconos.

Consulta `docs/DEPLOYMENT.md` antes de publicar o revertir una versión.

## Licencia

Consulta `LICENSE`.
