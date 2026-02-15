self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("morning-app").then(cache => {
      return cache.addAll([
        "index.html",
        "logo.png"
      ]);
    })
  );
});