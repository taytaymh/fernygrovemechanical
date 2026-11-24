import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: { inlineStylesheets: 'always', assets: 'assets' },
  vite: { plugins: [tailwindcss()] },
});
