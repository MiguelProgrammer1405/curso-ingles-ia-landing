# Página del curso

Landing page de **Cómo mejorar tu inglés con inteligencia artificial**, con el video promocional y el enlace de compra de Hotmart.

- `index.html` y los archivos `.css` contienen la página.
- `video-parts/` contiene el video. `assemble-video.cjs` verifica la longitud y el SHA-256 al reconstruirlo. Para reemplazarlo, guarda el nuevo `Curso_IA_Promocional.mp4` en la raíz, ejecuta `node split-video.cjs` e incluye los cambios de `video-parts/` en el commit.
- Ejecuta `node build.cjs` para preparar `dist/`. Abre `dist/index.html` para revisar la página.

## Cloudflare Workers Builds

Conecta este repositorio desde **Workers & Pages → autumn-poetry-0404 → Settings → Builds**. Selecciona `main` como rama de producción. Usa `node build.cjs` como comando de compilación y `npx wrangler deploy` como comando de despliegue. El directorio raíz es la raíz del repositorio. El nombre de `wrangler.jsonc` coincide con el Worker existente.

Antes del primer despliegue, verifica que estén disponibles el video, las imágenes y el enlace de Hotmart. Para cambios posteriores, crea una rama de trabajo. Si están habilitadas las vistas previas en Builds, prueba la versión de esa rama antes de integrarla en `main`.
