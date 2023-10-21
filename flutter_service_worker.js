'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "4896f3e613771520671b5d51939eda7e",
"/": "4896f3e613771520671b5d51939eda7e",
"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.bin": "53cc6e44ea8a3b931bb4c7208ba1b74f",
"assets/FontManifest.json": "3be3fd012c0fe4f0f1a33b3959f8332a",
"assets/packages/puzzle_app/images/cup.png": "646e41b261004f0605d63b6ef44b0be6",
"assets/packages/english_for_it/assets/images/2.0x/learning.png": "d3c4239de4f0a65d4100f66b3e0c9bcd",
"assets/packages/english_for_it/assets/images/2.0x/meeting.png": "b8da289240dd55c905a7107712e98cfb",
"assets/packages/english_for_it/assets/images/learning.png": "5e1856aee4b6961dd4a98e28a29b17f3",
"assets/packages/english_for_it/assets/images/meeting.png": "716a2fda1ca4bdab689e2bc761751569",
"assets/packages/english_for_it/assets/images/3.0x/learning.png": "22d90d5fd62bdad86d993422ed6db93d",
"assets/packages/english_for_it/assets/images/3.0x/meeting.png": "688dfd5cebe87a4a6dbe4c267f1dfd89",
"assets/packages/english_for_it/assets/images/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/english_for_it/assets/images/4.0x/learning.png": "6720c6e7095cf9fa1ab7cd32ccf983e3",
"assets/packages/english_for_it/assets/images/4.0x/meeting.png": "be77160114a63c559ab1ed5f12c36fab",
"assets/packages/english_for_it/assets/images/ua.png": "b7df7f812d0109eb09b7c4f836876262",
"assets/packages/english_for_it/assets/images/1.5x/learning.png": "e274294ff273853aff710bc463da4bc6",
"assets/packages/english_for_it/assets/images/1.5x/meeting.png": "25b265b5ce385d7fc650059f70a859d8",
"assets/packages/english_for_it/assets/dictionary.db": "ee00e06c9d211efadff696e2099337a8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "60dc031753d04c314ea88a0d2283133b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ada587154dfad326d209a418a5812c3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/pushups_app/assets/images/pushups.jpeg": "ec494d449de0bcdbce0489def6e836bb",
"assets/fonts/MaterialIcons-Regular.otf": "d37cef9d671b42db63cbce7d4596444d",
"assets/assets/images/english4it.png": "dbc01e04e4269a76ee3dd3a6d84f96b2",
"assets/assets/images/linkedin.png": "31e3dd63540a4a07f29d56859d6ec0c3",
"assets/assets/images/3.jpeg": "dab066f8dfb478db8325775296f29618",
"assets/assets/images/b3.jpeg": "749685ce9f0bdeb9e21327118b7ef072",
"assets/assets/images/github.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/assets/images/meeting.png": "716a2fda1ca4bdab689e2bc761751569",
"assets/assets/images/2.jpeg": "a315e2f719f4da2cac18f9dd676354eb",
"assets/assets/images/pushups.png": "60c8e1591b2fe750a367176ce3100e27",
"assets/assets/images/cookbook.png": "784c85b299e2d99a078c9c29d11b92a0",
"assets/assets/images/twitter.png": "88aa93c7d7d0b4f3bb45a0c7ad8f9a4b",
"assets/assets/images/cup.png": "646e41b261004f0605d63b6ef44b0be6",
"assets/assets/images/1.jpeg": "e78acd4cd2d0cf9d579c9ff9e40fda6d",
"assets/assets/images/pushups.jpeg": "ec494d449de0bcdbce0489def6e836bb",
"assets/assets/images/b1.jpeg": "95bb6664b466f99ed96bc7c69a6583d5",
"assets/assets/images/b2.jpeg": "048fa8dc19caa97d146226ec0e459c11",
"assets/assets/images/kobza.png": "92080e821b3b905a4854ecd1f95d1d4b",
"assets/assets/images/puzzle.png": "dee1716587c682eee7a8e9c9984239d6",
"assets/assets/fonts/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "e7e6f2e2b0bbf97297a39b9e87d36add",
"assets/AssetManifest.json": "9664a9d8a5fd9f4005e94bfea154590e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "dc16f1a142f5888b4af0604c8a1f58d1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
