import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // ✅ now correctly points to Tailwind's PostCSS plugin
    autoprefixer(),
  ],
};