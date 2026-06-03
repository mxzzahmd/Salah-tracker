//needed to create be installable as an app


//  Service Worker for handling background notifications
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Listen for custom notifications sent from script.js
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: event.data.icon || 'icon.png',
            badge: event.data.icon || 'icon.png',
            vibrate: [200, 100, 200]
        });
    }
});
