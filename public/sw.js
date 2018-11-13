const CACHE_NAME = 'cache-token';
const urlsToCache = [
     '/',
    '/css/landing.css',
    '/landing.js',
    '/public/images/Group67.png',
    '/public/images/Group50.png',
    '/public/images/Group3.png',
    'https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:800',
    'https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,600,700',
    'https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600',
    'https://fonts.googleapis.com/css?family=Montserrat:600,700,800,900',
    'https://fonts.googleapis.com/css?family=Lato:300,400,700,800,900'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});