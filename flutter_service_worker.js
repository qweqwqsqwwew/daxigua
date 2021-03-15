'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "300d5f91ff4c2d61a360d7839296db76",
"assets/assets/audio/boom.mp3": "d8ef645cdf329a524797a0e0d3e2f7ea",
"assets/assets/audio/boom1.mp3": "0fab96ac9809092355508850c3f3b3a2",
"assets/assets/audio/boom2.mp3": "da55d9fbb9710fd7a6c86536049ee90f",
"assets/assets/audio/cheer.mp3": "09d3ea18508b1c84ed1d21b9d2b33442",
"assets/assets/audio/coin.wav": "27cb4140ba59442d872236104879674a",
"assets/assets/audio/fall.mp3": "95ecdb45f28ea6a157ceb296c2af92ee",
"assets/assets/audio/mix.wav": "3b18cb3d571dc0e01e6f80b3a537486c",
"assets/assets/images/985/1.png": "75b1deecf20e0ae3918edf39aa42e553",
"assets/assets/images/985/10.png": "94b28e4df6fe4983583fef7c3f02d031",
"assets/assets/images/985/11.png": "53305efb50ac4d4a6788f8208d5ae55c",
"assets/assets/images/985/2.png": "1165a3736fd3b2c02db377ae83f3d908",
"assets/assets/images/985/3.png": "5a7bed6e558877a1205ffb62bb8b41cb",
"assets/assets/images/985/4.png": "d17c6290bf2dc3c779206b3ca14408a1",
"assets/assets/images/985/5.png": "338004c45e56e5d4117f5742fd171eb3",
"assets/assets/images/985/6.png": "aaf1db01fe5db227f4b2e6a34893b91d",
"assets/assets/images/985/7.png": "76ceb83f237d559521b54023f0b24b50",
"assets/assets/images/985/8.png": "498ad6dac6fb62c115a9f7ba00c09a13",
"assets/assets/images/985/9.png": "71a3655bfe66131bf951db9014765457",
"assets/assets/images/bg.png": "ccd7527bac6fc8e89f8026bcf32bf5a2",
"assets/assets/images/dead_line.png": "f35c5f41cdfcb17d846570fdcb270e2d",
"assets/assets/images/flame.png": "8c3eb8306a355c0e988e15edf755b01f",
"assets/assets/images/friuts/1.png": "fc014ed265e605830dc927b812e20933",
"assets/assets/images/friuts/10.png": "7079202863241fcca04c400621f77096",
"assets/assets/images/friuts/11.png": "d389b5a8f5bf08cad5ce61cc0f073b8f",
"assets/assets/images/friuts/2.png": "17fd063588c43e3ee5e61f5aa1fb2f75",
"assets/assets/images/friuts/3.png": "2565f687b176777af7b5c7d5ef187e1f",
"assets/assets/images/friuts/4.png": "53975916191b89d5a0793d2d5b8fc558",
"assets/assets/images/friuts/5.png": "60d08989d81ca6cfad8350f8d0aa185b",
"assets/assets/images/friuts/6.png": "defe31745a84ac9d53a55646be01f302",
"assets/assets/images/friuts/7.png": "db02a5098ca3a4a4852cc206633ae404",
"assets/assets/images/friuts/8.png": "b35861c6b98b9a55765157d8c3be074d",
"assets/assets/images/friuts/9.png": "8c363eb66ec576236ff168f915455edc",
"assets/assets/images/qq/1.png": "a0dc4b5c125e3c004ea698a20591541f",
"assets/assets/images/qq/10.png": "04876b7dd538b7e9ebea3f46b0e69ced",
"assets/assets/images/qq/11.png": "6b8832795d6c5e05a90ab7d45444052b",
"assets/assets/images/qq/2.png": "ba40166b2366a055e920d0425ce122fb",
"assets/assets/images/qq/3.png": "60c1c6dea4f81eb17e1f29ec4cad802d",
"assets/assets/images/qq/4.png": "18334f3e803d718464a3d0ca680934af",
"assets/assets/images/qq/5.png": "2cb70face6026424aedbc163813b587c",
"assets/assets/images/qq/6.png": "5f8198736d11f124a6ec300e2cc23dc9",
"assets/assets/images/qq/7.png": "d2ff6ad735ec655c6d3019d461d629fa",
"assets/assets/images/qq/8.png": "cd0ecb289844cb411278b22a44787f7c",
"assets/assets/images/qq/9.png": "565296e7895aa8c218d36cba714304f3",
"assets/assets/images/qr.jpg": "f7f42af62fd1020e765dd3e1c6f74e3e",
"assets/assets/images/setting.png": "5580421b58e6735887a5887944f4df98",
"assets/assets/images/shandong/1.png": "b538f91b61dc65278d69a50682d9c9ac",
"assets/assets/images/shandong/10.png": "5a7bed6e558877a1205ffb62bb8b41cb",
"assets/assets/images/shandong/11.png": "7491d4b61b30e66afb38df0f8e2b752b",
"assets/assets/images/shandong/2.png": "8bcca35d12a84ae0d03d1b759f97eba2",
"assets/assets/images/shandong/3.png": "8f2f5be4f0c49368c2c597f6901dbba8",
"assets/assets/images/shandong/4.png": "4a085786440d6d333dfbc9ef3875b67b",
"assets/assets/images/shandong/5.png": "e79d3c8f3cdeef3f5d65f32614cd6d6b",
"assets/assets/images/shandong/6.png": "e5b1d15e5781d11eeb058c9aecdc9dc1",
"assets/assets/images/shandong/7.png": "4a67de6469b1528ee7acf9671118082d",
"assets/assets/images/shandong/8.png": "4e650081747c8c31856d3c86700524bb",
"assets/assets/images/shandong/9.png": "75b1deecf20e0ae3918edf39aa42e553",
"assets/assets/images/shine.png": "b31c4812ec5e279b8e53d5bee3dd781d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "ea78df24d19f32535bcfc8bc8e9cd2ed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "11a6d92037cc81ef07b12aa8d6a18084",
"/": "11a6d92037cc81ef07b12aa8d6a18084",
"main.dart.js": "fbf344d43aee091bba0d0ecf7781c77e",
"manifest.json": "b9712a60eb7421a333ccea726dfbcdb1",
"version.json": "11f24301746cbb4e009da6de763122f0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
