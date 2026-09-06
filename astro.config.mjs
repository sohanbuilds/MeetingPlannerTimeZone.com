// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://meetingplannertimezone.com',
  integrations: [
    preact(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          ja: 'ja-JP',
          fr: 'fr-FR',
          de: 'de-DE',
          pt: 'pt-PT',
          ko: 'ko-KR',
          it: 'it-IT',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
