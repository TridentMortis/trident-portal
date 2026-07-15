const CACHE_NAME = 'trident-mortis-v4-pwa-custom';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './IMG_20250731_190635_413.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
