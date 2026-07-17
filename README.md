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
privacidad/           Política de Privacidad (ES)
privacy/              Privacy Policy (EN)
terminos/             Términos de Uso (ES)
terms/                Terms of Use (EN)
```

Contacto: WhatsApp `+54 9 362 418-2059` (número real de GestorIA) y `contacto@gestoriacore.com.ar`.

## Publicar en GitHub Pages / Cloudflare Pages

1. Subir el repo a GitHub (ya hecho: `github.com/StivenAlexis/GestorIA-web`).
2. En *Settings → Pages*, elegir **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Conectar el dominio propio `gestoriacore.com.ar` (ya delegado a Cloudflare) apuntando al host que se elija.
4. El sitio usa rutas relativas, así que funciona tanto en `usuario.github.io/repo/` como con dominio propio.

## Notas de seguridad

- Sin backend, sin formularios, sin analytics ni tracking.
- CSP definida por `<meta http-equiv="Content-Security-Policy">` en cada página.
- Único recurso externo: fuente Inter desde Google Fonts (HTTPS).
- Contacto solo vía `wa.me` y `mailto:`; links externos con `rel="noopener noreferrer"`.
