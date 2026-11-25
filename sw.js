const CACHE='lernapp-v6';
const FILES=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "daten/ant/1.1.js", "daten/ant/1.10.js", "daten/ant/1.2.js", "daten/ant/1.3.js", "daten/ant/1.4.js", "daten/ant/1.5.js", "daten/ant/1.6.js", "daten/ant/1.7.js", "daten/ant/1.8.js", "daten/ant/1.9.js", "daten/ant/2.1.js", "daten/ant/2.2.js", "daten/ant/2.3.js", "daten/ant/2.4.js", "daten/ant/2.5.js", "daten/ant/2.6.js", "daten/ant/2.7.js", "daten/ant/2.8.js", "daten/lj1.js", "daten/lj2.js", "daten/lj3.js"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
