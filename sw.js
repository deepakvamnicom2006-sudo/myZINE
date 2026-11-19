/* Pocket Zine Maker — offline support.
   Change VERSION whenever you upload a new index.html so phones pick it up. */
const VERSION = "pzm-v1.0.0";
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icons/logo.svg", "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-32.png",
  "./vendor/jspdf.umd.min.js", "./vendor/jszip.min.js"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => Promise.all(SHELL.map((u) => c.add(new Request(u, { mode: u.startsWith("http") ? "cors" : "same-origin" })).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // the page itself: try the network first so updates arrive, fall back to the saved copy offline
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((r) => { const cp = r.clone(); caches.open(VERSION).then((c) => c.put("./index.html", cp)); return r; })
      .catch(() => caches.match("./index.html")));
    return;
  }
  // fonts, libraries and icons: use the saved copy, refresh it in the background
  const cacheable = url.origin === location.origin || /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname) || url.hostname === "cdnjs.cloudflare.com";
  if (!cacheable) return;
  e.respondWith(caches.open(VERSION).then((c) => c.match(req).then((hit) => {
    const net = fetch(req).then((r) => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  })));
});
