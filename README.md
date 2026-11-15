# Página del curso

Landing page de **Cómo mejorar tu inglés con inteligencia artificial**, con el video promocional y el enlace de compra de Hotmart.

- `index.html` y los archivos `.css` contienen la página.
- `video-parts/` contiene el video. `assemble-video.cjs` verifica la longitud y el SHA-256 al reconstruirlo. Para reemplazarlo, guarda el nuevo `Curso_IA_Promocional.mp4` en la raíz, ejecuta `node split-video.cjs` e incluye los cambios de `video-parts/` en el commit.
- Ejecuta `node build.cjs` para preparar `dist/`. Abre `dist/index.html` para revisar la página.

## Cloudflare Workers Builds

El Worker `autumn-poetry-0404` está conectado a este repositorio. Los commits que llegan a `main` inician la compilación con `node build.cjs` y el despliegue con `npx wrangler deploy` desde la raíz del repositorio. Consulta el resultado en **Workers & Pages → autumn-poetry-0404 → Deployments**.

Para revisar un cambio, crea una rama de trabajo. Comprueba el video, las imágenes y el enlace de Hotmart. Si están habilitadas las vistas previas en Builds, prueba la versión de esa rama antes de integrarla en `main`.
