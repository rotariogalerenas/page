# Sitio web del Club Rotario Satélite Galereñas

Página web del Club Rotario Satélite Galereñas (Rotary International, Guanajuato). Es un sitio estático: no necesita servidor ni base de datos.

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La página completa: textos, diseño y formulario |
| `logo-rotary-galerenas.png` | Logo del encabezado |
| `rueda-rotaria.webp` | Rueda rotaria de la portada y del pie de página |
| `socias-guanajuato.webp` | Foto de "Nuestras socias" en Quiénes somos |
| `banco-de-alimentos.webp` | Foto de la entrega al Banco de Alimentos |
| `donacion-alimentos.webp` | Foto del proyecto insignia |
| `gabriela-franco.webp` | Foto de la presidenta |
| `samantha-smith.jpg` | Foto de la socia destacada |
| `socias-rueda.webp` | Foto de grupo en Nuestras socias |
| `icono.png` | Ícono de la pestaña del navegador y del celular |
| `vista-previa.jpg` | Imagen que aparece al compartir el enlace en WhatsApp o Facebook |

Todos los archivos van en la raíz del repositorio, sin carpetas.

## Publicar con GitHub Pages

1. Crea el repositorio público `rotarygalerenas.github.io` dentro de la cuenta u organización `rotarygalerenas`.
2. Sube todos los archivos con **Add file → Upload files** y confirma con **Commit changes**.
3. Ve a **Settings → Pages**. En **Build and deployment**, elige **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`, y presiona **Save**.
4. En unos minutos el sitio queda en https://rotarygalerenas.github.io

Si usas otro nombre de cuenta o de repositorio, cambia la dirección de la línea `og:image` en `index.html` para que la vista previa siga funcionando.

## Cambiar una foto

Sube la foto nueva con exactamente el mismo nombre de archivo (por ejemplo, `gabriela-franco.webp`). GitHub reemplaza la anterior y la página la muestra sola. Si la foto nueva tiene otra extensión (.jpg en vez de .webp), también hay que cambiar el nombre dentro de `index.html`.

## Cambiar un texto

Abre `index.html` en GitHub, presiona el lápiz (**Edit this file**), busca el texto, cámbialo y confirma con **Commit changes**.

## Pendientes

- **Mesa directiva:** nombres y fotos de los 8 cargos. Están ocultos en `index.html`, dentro del comentario `PENDIENTE: mesa directiva`.
- **Socias:** nombre, profesión y foto de 4 socias. Están ocultas dentro del comentario `PENDIENTE: tarjetas de socias`.
- **Proyectos:** fotos y resultados de Útiles y lectura, Agua limpia, Guanajuato verde y Mujeres emprendedoras.
- **Año de fundación** del club, para la línea del tiempo.
- **Contacto:** confirmar que exista el correo `contacto@rotarygalerenas.org` y poner los enlaces reales de Instagram y Facebook. Hoy llevan a la página principal de cada red.
- **Formulario:** hoy solo arma un mensaje para copiar y enviar por correo. Para recibir los mensajes directamente hay que conectarlo a un servicio como Formspree o Google Forms.
