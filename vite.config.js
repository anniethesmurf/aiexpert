import { readdirSync } from 'node:fs';
import { resolve, basename, extname } from 'node:path';
import { defineConfig } from 'vite';

const rootDir = __dirname;
const pagesDir = resolve(rootDir, 'pages');

const htmlEntries = Object.fromEntries(
  readdirSync(pagesDir)
    .filter(file => extname(file) === '.html')
    .map(file => [basename(file, '.html'), resolve(pagesDir, file)])
);

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(rootDir, 'index.html'),
        citation: resolve(rootDir, 'citation.html'),
        termsOfUse: resolve(rootDir, 'terms-of-use.html'),
        ...htmlEntries
      }
    }
  }
});
