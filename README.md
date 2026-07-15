# GestorIA — Landing page

Landing page pública de GestorIA: sitio estático bilingüe (ES/EN) en HTML + CSS + JS vanilla, sin build step, listo para GitHub Pages.

## Estructura

```
index.html            Landing principal (ES default, selector ES/EN)
assets/
  styles.css          Estilos (modo claro/oscuro vía prefers-color-scheme)
  script.js           i18n, animaciones de scroll, año del footer
  logo-gestoria.png   Isotipo oficial (usado en header, footer y favicon)
  logo-gestoria.svg   Versión vectorial aproximada (no se usa; disponible como alternativa)
privacidad/           Política de Privacidad (ES) — contenido legal pendiente
privacy/              Privacy Policy (EN) — contenido legal pendiente
terminos/             Términos de Uso (ES) — contenido legal pendiente
terms/                Terms of Use (EN) — contenido legal pendiente
```

## Pendientes antes de publicar

1. **Número de WhatsApp**: reemplazar `549XXXXXXXXXX` en `index.html` (3 ocurrencias: header, hero y contacto). Formato internacional, sin `+`, sin espacios ni guiones.
2. **Contenido legal**: reemplazar los placeholders "Contenido legal pendiente de incorporar" en las 4 páginas legales con el texto legal definitivo, y quitar el `<meta name="robots" content="noindex">` de esas páginas cuando estén completas.

## Publicar en GitHub Pages

1. Subir el repo a GitHub.
2. En *Settings → Pages*, elegir **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. El sitio usa rutas relativas, así que funciona tanto en `usuario.github.io/repo/` como con dominio propio.

## Notas de seguridad

- Sin backend, sin formularios, sin analytics ni tracking.
- CSP definida por `<meta http-equiv="Content-Security-Policy">` en cada página.
- Único recurso externo: fuente Inter desde Google Fonts (HTTPS).
- Contacto solo vía `wa.me` y `mailto:`; links externos con `rel="noopener noreferrer"`.
