console.log("vite.config.js is loaded!");

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Frontend-Mentor-Challenge---Article-preview-component/',
  plugins: [
    tailwindcss(),
  ],
});