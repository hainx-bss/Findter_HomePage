import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));

const legacyRoutes = {
  '/advanced.html': 'legacy/advanced.html',
  '/Editor.html': 'legacy/Editor.html',
  '/a.html': 'legacy/a.html',
  '/1.html': 'legacy/1.html',
  '/Editor copy.html': 'legacy/Editor copy.html',
  '/polaris.css': 'styles/polaris.css',
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath);
  const type = ext === '.css' ? 'text/css; charset=utf-8' : 'text/html; charset=utf-8';
  res.statusCode = 200;
  res.setHeader('Content-Type', type);
  fs.createReadStream(filePath).pipe(res);
}

function legacyStaticPlugin() {
  return {
    name: 'legacy-static',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || '').split('?')[0]);
        const rel = legacyRoutes[url];
        if (!rel) return next();
        const filePath = path.join(root, rel);
        if (!fs.existsSync(filePath)) return next();
        sendFile(res, filePath);
      });
    },
    closeBundle() {
      const outDir = path.join(root, 'dist');
      fs.mkdirSync(outDir, { recursive: true });
      Object.entries(legacyRoutes).forEach(([urlPath, rel]) => {
        const from = path.join(root, rel);
        const to = path.join(outDir, urlPath.slice(1));
        if (fs.existsSync(from)) fs.copyFileSync(from, to);
      });
    },
  };
}

export default defineConfig({
  plugins: [legacyStaticPlugin()],
});
