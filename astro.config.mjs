import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tu-dominio.com', // Cambiar por el dominio real
  vite: {
    plugins: [tailwindcss()],
  },
});
