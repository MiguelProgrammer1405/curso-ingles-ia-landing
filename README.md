# Página del curso

Landing page de **Cómo mejorar tu inglés con inteligencia artificial**, con el video promocional al inicio.

## Archivos

- `index.html`: contenido y comportamiento de la página. La compra conduce a Hotmart.
- `styles.css`, `sales.css`, `course-structure.css`: diseño y adaptación a móviles.
- `Curso_IA_Promocional.mp4`, `promo-poster.jpg`: video de presentación y su portada.
- Imágenes `.png`: logo y ejemplos del contenido del curso.

La página es estática: no necesita compilación ni dependencias. Abre `index.html` para verla localmente. Los archivos están en la raíz para que Cloudflare pueda servir `index.html` como portada.

## Cambios y publicación

Edita los archivos, revisa la página y crea un commit. El flujo en `.github/workflows/deploy-pages.yml` puede publicar cada push a `main` en el **proyecto actual** de Cloudflare Pages, conservando el dominio. Usa Direct Upload desde GitHub Actions: no necesitas mover el sitio a otro proyecto.

Para activarlo en GitHub, configura los secretos `CLOUDFLARE_API_TOKEN` (token con permiso **Account / Cloudflare Pages / Edit**) y `CLOUDFLARE_ACCOUNT_ID`, y la variable `CLOUDFLARE_PAGES_PROJECT` con el nombre exacto de tu proyecto actual. Mientras falte esa variable, los pushes conservan el código sin desplegar. Después de configurar todo, ejecuta una vez **Actions → Deploy course landing page → Run workflow**.

Antes de publicar cambios en el precio o la garantía, comprueba que coincidan con la configuración del producto en Hotmart.
