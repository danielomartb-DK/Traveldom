# Traveldom Soluciones — Sitio Web Corporativo

Sitio web profesional, responsive y accesible para **Traveldom Soluciones**, desarrollado con **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** y **Lucide Icons**.

## Características principales

- **Identidad visual Traveldom**: Paleta oficial (`#102D52`, `#1D5B91`, `#EAF4FC`, `#C9A66B`, `#FFFFFF`, `#F4F6F8`) y tipografías `Poppins` (encabezados) + `Inter` (cuerpo).
- **Secciones completas**:
  - Barra superior con correo, teléfono, horario y redes sociales configurables.
  - Header sticky responsive con navegación por anclas y menú móvil.
  - Hero principal dividido con composición corporativa limpia.
  - **Nuestros servicios**: 4 tarjetas (`Solicitud de visa`, `Asesoría consular`, `Traducción de documentos`, `Seguros de viaje`) con modales de detalle ampliado.
  - **Descubre el paraíso de República Dominicana**: filtro interactivo por destino (`Punta Cana`, `Bávaro`, `Bayahíbe`, `Puerto Plata`, `Santo Domingo`) y tarjetas de hoteles de demostración.
  - **Paquetes de vacaciones**: 4 categorías con estado `"Solicitar cotización"` (sin tarifas inventadas).
  - Franja azul `"¿Por qué elegir Traveldom Soluciones?"` y sección `"Sobre nosotros"`.
  - Acordeón interactivo de **Preguntas frecuentes** (8 preguntas).
  - **Formulario de solicitud de asesoría** con validación en cliente y envío real mediante **WhatsApp (`wa.me`)** o **correo electrónico (`mailto:`)**.
  - Botón flotante de WhatsApp persistente, CTA final y Footer con páginas legales (`/politica-privacidad`, `/tratamiento-datos`, `/terminos-condiciones`).
- **Transparencia y SEO**: Metadatos Open Graph, `JSON-LD` (`TravelAgency`), `sitemap.xml`, `robots.txt` en `es-419` y avisos legales explícitos (sin garantías de visa ni testimonios ficticios).

## Configuración centralizada

Edita el archivo `src/config/site.ts` para actualizar:

- `whatsappNumber`: Número de WhatsApp en formato internacional sin `+` ni espacios (ej. `18090000000`).
- `whatsappDefaultMessage`: Mensaje predefinido para el botón flotante.
- `contact`: Correo electrónico, teléfono, horario y ubicación.
- `socials`: Enlaces reales a redes sociales.
- `showTestimonials`: Cambiar a `true` cuando existan testimonios reales verificados en `src/data/content.ts`.
- `NEXT_PUBLIC_SITE_URL`: Variable de entorno opcional para el dominio productivo en metadatos y `sitemap.xml`.

## Cómo ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. Generar compilación de producción y verificar lint:

```bash
npm run lint
npm run build
npm run start
```
