self.addEventListener('install', event => {
    console.log('V1 installing…');

    // cache a cat SVG
    // event.waitUntil(
    //     caches.open('static-v1').then(cache => cache.addAll(
    //         [
    //             '/assets/social/ajuda.png',
    //             '/assets/social/ate_logo.png',
    //             '/assets/social/desculpe.png',
    //             '/assets/social/nao.png',
    //             '/assets/social/obrigado.png',
    //             '/assets/social/ola.png',
    //             '/assets/social/por_favor.png',
    //             '/assets/social/sim.png',
    //         ]
    //     )
    //     )
    // )
});
self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request));
});