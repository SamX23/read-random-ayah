if (!self.define) {
  const e = (e) => {
    e !== "require" && (e += ".js");
    let i = Promise.resolve();
    return (
      n[e] ||
        (i = new Promise(async (i) => {
          if ("document" in self) {
            const n = document.createElement("script");
            (n.src = e), document.head.appendChild(n), (n.onload = i);
          } else importScripts(e), i();
        })),
      i.then(() => {
        if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
        return n[e];
      })
    );
  };
  const i = (i, n) => {
    Promise.all(i.map(e)).then((e) => n(e.length === 1 ? e[0] : e));
  };
  const n = { require: Promise.resolve(i) };
  self.define = (i, s, c) => {
    n[i] ||
      (n[i] = Promise.resolve().then(() => {
        const n = {};
        const r = { uri: location.origin + i.slice(1) };
        return Promise.all(
          s.map((i) => {
            switch (i) {
              case "exports":
                return n;
              case "module":
                return r;
              default:
                return e(i);
            }
          })
        ).then((e) => {
          const i = c(...e);
          return n.default || (n.default = i), n;
        });
      }));
  };
}
define("./sw.js", ["./workbox-030153e1"], (e) => {
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/Assets/font/me_quran_volt_newmet.ttf",
          revision: "a79b204e9c3055c77f0d81921bd881c2",
        },
        {
          url: "/_next/static/chunks/commons.b33d69fee4c480cb880f.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url:
            "/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.b110b24f71599df941c8.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/chunks/main-a53dd5f973d5f0c87205.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/chunks/pages/_app-83db32f604988d8318b9.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/chunks/pages/_error-b2ff4627d1ca4a0ecaab.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/chunks/pages/index-58736103328163a2b06d.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/css/6e9ef204d6fd7ac61493.css",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/css/dbb73b85d7969168b718.css",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/fcSyc6Kil-nyNh-iqIpM5/_buildManifest.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/_next/static/fcSyc6Kil-nyNh-iqIpM5/_ssgManifest.js",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url:
            "/_next/static/media/me_quran_volt_newmet.0df26babbd330ac290ae8891eb1a3fb3.ttf",
          revision: "fcSyc6Kil-nyNh-iqIpM5",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "fe42b36735a46ae47095a7c0c744d2e2",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "87b19d98a6ecd0eab78d9ea84f89f3be",
        },
        {
          url: "/apple-touch-icon-120x120.png",
          revision: "07cf42a179dbefbbbb6cab1284598b7f",
        },
        {
          url: "/apple-touch-icon-152x152.png",
          revision: "fb2ec793785451b1fbf6c1e11639442b",
        },
        {
          url: "/apple-touch-icon-180x180.png",
          revision: "f129e89b5e20476bf4dc82a901d7e245",
        },
        {
          url: "/apple-touch-icon-60x60.png",
          revision: "47ff4c10aba2448eb3ac54082fe6035a",
        },
        {
          url: "/apple-touch-icon-76x76.png",
          revision: "db6c55c2fb81623080a60903c55a5fa2",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "f129e89b5e20476bf4dc82a901d7e245",
        },
        {
          url: "/browserconfig.xml",
          revision: "61bfd064535af0c276bb63b3fd579733",
        },
        {
          url: "/favicon-16x16.png",
          revision: "4c00dc4edf2d9ff4c21d6b153a661647",
        },
        {
          url: "/favicon-32x32.png",
          revision: "20b7e1bb5fd3f6167ca41b31579baeb9",
        },
        { url: "/favicon.ico", revision: "3f372eae62736ef4add7a26b22ff2980" },
        { url: "/manifest.json", revision: "e77661d99698f4418adb7d91716a93c0" },
        {
          url: "/mstile-150x150.png",
          revision: "9835159c62a42c6304c46499ae927b6f",
        },
        {
          url: "/safari-pinned-tab.svg",
          revision: "12f108fba66af1a237d4fb23023c5d35",
        },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
