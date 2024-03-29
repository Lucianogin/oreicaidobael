'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "67445c1e62274d440242c3b950681fc6",
"assets/FontManifest.json": "40468c7c60c4889cff63fc93cc537fad",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/columbiaserialmediumregular.ttf": "5259ed8470fbbf98948cb80bda291c2d",
"assets/lib/assets/images/ORDEM%2520LOGO.png": "051dd2ad79f774f3270338bd41a806e2",
"assets/lib/assets/images/public_assets_dice%2520(1).gif": "e0b9cd50cb5f07591973d1853c6d7602",
"assets/NOTICES": "681fac49c22b34e9100b7988f7a4103c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c948d958696dbd1129d77f4fbe4a1f5d",
"/": "fe17179f98db062ed9f8f49920de1803",
"main.dart.js": "a469ac427f541509832e9c9c02a943f9",
"manifest.json": "e35ccb9235249a550e6617e44bc22e8a",
"oreicaidobael/.git/COMMIT_EDITMSG": "1e85d27c4639f6730bb7624094413c74",
"oreicaidobael/.git/config": "b731dbcfc624c80b0c5f223ff1e55c29",
"oreicaidobael/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"oreicaidobael/.git/FETCH_HEAD": "9470d7bff5c5c6d46680ca20b0e61d6d",
"oreicaidobael/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"oreicaidobael/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"oreicaidobael/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"oreicaidobael/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"oreicaidobael/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"oreicaidobael/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"oreicaidobael/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"oreicaidobael/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"oreicaidobael/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"oreicaidobael/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"oreicaidobael/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"oreicaidobael/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"oreicaidobael/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"oreicaidobael/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"oreicaidobael/.git/index": "e50cc1c96b17793e8668b98660707ce0",
"oreicaidobael/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"oreicaidobael/.git/logs/HEAD": "5a3e9fa45e9b3f256446a4aa288f00a4",
"oreicaidobael/.git/logs/refs/heads/main": "5a3e9fa45e9b3f256446a4aa288f00a4",
"oreicaidobael/.git/logs/refs/remotes/origin/HEAD": "5f2b62c25c5c7adfa91fc09753ac3d1b",
"oreicaidobael/.git/logs/refs/remotes/origin/main": "c18a78f0c5aa65f6c687fd9326ffba0a",
"oreicaidobael/.git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
"oreicaidobael/.git/objects/00/94cf35d858be58d439b5c3c59392b0705118de": "8813bea2691e3ea8e369d2470ab24a3c",
"oreicaidobael/.git/objects/04/721d7963116d1ad8b64528a2d9c4473435627b": "7990f826c4da6740485a3310e1921ceb",
"oreicaidobael/.git/objects/08/590e7b0528bdececb23114f6af09fa9f276d6a": "fbba13a7f085fe533239626ab8d4d079",
"oreicaidobael/.git/objects/1a/503eb979d51ad4d97833443a91972e513db41a": "11a1d8057c20da89e98485d18db33463",
"oreicaidobael/.git/objects/1c/3bbf554eb99b24f7ef1bd0a561f97a18925e02": "cff932a71c494730c675cee91363803f",
"oreicaidobael/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"oreicaidobael/.git/objects/25/92b85f7c635dfbee4b787c20f8e01ae6c00b21": "0f4403be6a6a6be147c763ab87b39e33",
"oreicaidobael/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"oreicaidobael/.git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
"oreicaidobael/.git/objects/46/65f1a2024e412a8e7d0e388d11b9517b16d168": "d721341699861defa49cd2eb73353b15",
"oreicaidobael/.git/objects/49/424e72cf8d559460bc611befc9be6544196548": "45b1d8483070867d09664659f2450b02",
"oreicaidobael/.git/objects/63/a5c26f7ba8151b53c66eee467ba2e17ee9eab4": "06ec07689b87b73cf73ebd4dd3bc1e3a",
"oreicaidobael/.git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
"oreicaidobael/.git/objects/76/87dac3ae80941e1efd42b1e0b4b0ba6d3f49f5": "2efdb88991fe445deeaabd17ffd3d298",
"oreicaidobael/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"oreicaidobael/.git/objects/80/dcc565b0fb4dcbec9e099fad51eecbbe67a4e8": "2fc7c4646726a5f3d9bd30de029a71ae",
"oreicaidobael/.git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
"oreicaidobael/.git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
"oreicaidobael/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"oreicaidobael/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"oreicaidobael/.git/objects/90/27c2b556382785ead3430258557f8f7994a2e2": "2bb5d3e983373bb396f4482f54425af4",
"oreicaidobael/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"oreicaidobael/.git/objects/a8/4029ecf728a391db7a63be5bd23621d50f8b06": "5e7a8dcdc0ef99117cf7685839d62cd0",
"oreicaidobael/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"oreicaidobael/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"oreicaidobael/.git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
"oreicaidobael/.git/objects/af/3bf31084fbcb86d5889e0a239c4c6dcaf46f77": "76f6b6d2ea9450ccd4d4126f83acd971",
"oreicaidobael/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"oreicaidobael/.git/objects/bc/eba338b8c71fce20131bbad763d5efd4fcd19c": "527c2cc4c20d25eab420690e41b3682e",
"oreicaidobael/.git/objects/c2/21b825a478cdf59eab3e8ef6f7eb25b3fd7858": "73a36d729a4645a839aedaa5b0bfbd83",
"oreicaidobael/.git/objects/c7/8c6c661896b7e65572a4650ae766461d23ef92": "3f016ef85ae869b5b9bbcbd0fcdcee37",
"oreicaidobael/.git/objects/d6/ae9ad2c69b2b11f1cd151acf222e002c8705d9": "800ee5800b7db68374607d63687999e5",
"oreicaidobael/.git/objects/db/ffd9814b67ca506159f72b1bb9fdc184fddba9": "9f19a039c4fb521cbd66900493ec5b47",
"oreicaidobael/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"oreicaidobael/.git/objects/f6/2b7071b9eb8c4798ec46227721c80430671d40": "f3556f5a9b33f72d413ecdfd00e02277",
"oreicaidobael/.git/objects/fa/4e0e3358c9cbbcefd58a13b373311d4f60b543": "76ce516e17365563c744fc33b568da6b",
"oreicaidobael/.git/ORIG_HEAD": "068974702fe980737592fef410e730ee",
"oreicaidobael/.git/refs/heads/main": "80216fcec87d20e90c994a80087477e9",
"oreicaidobael/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"oreicaidobael/.git/refs/remotes/origin/main": "80216fcec87d20e90c994a80087477e9",
"oreicaidobael/canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"oreicaidobael/canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"oreicaidobael/canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"oreicaidobael/canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"oreicaidobael/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"oreicaidobael/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"oreicaidobael/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"oreicaidobael/index.html": "fe17179f98db062ed9f8f49920de1803",
"oreicaidobael/main.dart.js": "62c85cbac1f2c90428097294fd0230a9",
"oreicaidobael/manifest.json": "e35ccb9235249a550e6617e44bc22e8a",
"oreicaidobael/version.json": "554b82fd9383d1333affa4a447c17645",
"version.json": "554b82fd9383d1333affa4a447c17645"
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
