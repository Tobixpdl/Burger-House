# Burger House

Sitio estático de pedidos por WhatsApp, creado con React, TypeScript y Vite.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Para crear la versión de producción:

```bash
npm run build
```

El resultado queda en `dist/`.

## Personalización rápida

- **WhatsApp, nombre, dirección, horarios, costo de envío y zona:** editá `src/config/business.ts`. Reemplazá `ACÁ_PONÉ_TU_NÚMERO_DE_WHATSAPP` por el número internacional sin `+`, espacios ni guiones; por ejemplo `5491112345678`.
- **Productos, precios, disponibilidad, descripciones y extras:** editá `src/data/products.ts`. Los precios son números enteros en pesos argentinos y se formatean automáticamente.
- **Imágenes:** reemplazá los SVG de demostración en `public/products/` por fotos reales y actualizá el campo `image` de cada producto. Se recomiendan WebP o AVIF, de aproximadamente 1200 × 800 px.
- **Colores y estilos:** editá las variables y reglas de `src/index.css`. Los principales colores son `#151210` (fondo), `#ef4b2f` (acción roja) y `#ffb11b` (acento amarillo).
- **Marca del desarrollador:** buscá `ACÁ_PONÉ_EL_NOMBRE_DE_TU_MARCA` en `src/components/Footer.tsx`.

## Desplegar en Cloudflare Pages

1. Subí esta carpeta a un repositorio Git.
2. En Cloudflare Dashboard abrí **Workers & Pages** y elegí **Create application → Pages → Connect to Git**.
3. Seleccioná el repositorio y usá estos valores:
   - Framework preset: **Vite**.
   - Build command: `npm run build`.
   - Build output directory: `dist`.
4. Guardá y desplegá. Cada cambio enviado al repositorio generará un despliegue nuevo.

No requiere servidor, base de datos, pagos online ni API de WhatsApp.
