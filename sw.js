const CACHE_NAME = 'simulador-v1.1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './base.js',
  './manifest.json'
];

// Instalación: Guardar archivos en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Interceptar peticiones: Servir desde caché si está disponible
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});