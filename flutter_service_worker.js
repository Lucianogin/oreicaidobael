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
"index.html": "18a367f69675eb7d530e253c07723746",
"/": "22ac6d787b968ccd449c9877f9be6c8c",
"main.dart.js": "17696d8f56bf7712813c20ea4c1e997a",
"manifest.json": "e35ccb9235249a550e6617e44bc22e8a",
"oreicaidobael/.git/COMMIT_EDITMSG": "069cc3ff1ccfc810b0a75992d56c17e5",
"oreicaidobael/.git/config": "b731dbcfc624c80b0c5f223ff1e55c29",
"oreicaidobael/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"oreicaidobael/.git/FETCH_HEAD": "c065afa18302b5d975b64c2e0b085096",
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
"oreicaidobael/.git/index": "a873bb865be6a4ab974d07ba84a1e2df",
"oreicaidobael/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"oreicaidobael/.git/logs/HEAD": "2043e9498800a9e82493bcd24fc98b59",
"oreicaidobael/.git/logs/refs/heads/main": "6eb5e8e0f767f864970dc4c09847cc45",
"oreicaidobael/.git/logs/refs/remotes/origin/HEAD": "3d6b5271184ece97c9d7e47d970da7cf",
"oreicaidobael/.git/logs/refs/remotes/origin/main": "4c1f9e2594c45a7c430993cab80f86a1",
"oreicaidobael/.git/objects/03/f6b2bacec1668af260fb79e504aa24c042a290": "30783f784464e330854b01647ade201c",
"oreicaidobael/.git/objects/04/721d7963116d1ad8b64528a2d9c4473435627b": "7990f826c4da6740485a3310e1921ceb",
"oreicaidobael/.git/objects/08/590e7b0528bdececb23114f6af09fa9f276d6a": "fbba13a7f085fe533239626ab8d4d079",
"oreicaidobael/.git/objects/1a/503eb979d51ad4d97833443a91972e513db41a": "11a1d8057c20da89e98485d18db33463",
"oreicaidobael/.git/objects/1c/3bbf554eb99b24f7ef1bd0a561f97a18925e02": "cff932a71c494730c675cee91363803f",
"oreicaidobael/.git/objects/1d/df84960678433552b83ac9660e8d059b1d095d": "f71dd2b0d67eafdccbb744cf41177178",
"oreicaidobael/.git/objects/1e/e7340553d151902a36a13e1d031868f2217c6b": "1a94d271162edc7356b03635a3b065ca",
"oreicaidobael/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"oreicaidobael/.git/objects/25/92b85f7c635dfbee4b787c20f8e01ae6c00b21": "0f4403be6a6a6be147c763ab87b39e33",
"oreicaidobael/.git/objects/2f/e281e7d4e19311927a50bf6fb6a76ae11fa22a": "fc5611f6b9ca214e45de579716591afa",
"oreicaidobael/.git/objects/30/607f385c5a551919c68d8595e3ba67798c307d": "b357d38a60eec79c85c54eb218996eeb",
"oreicaidobael/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"oreicaidobael/.git/objects/37/848c6fba7b0acd28dc1a1be7694538a5619bc6": "3c36fd416a0d0d0b5fa5be40d107f32f",
"oreicaidobael/.git/objects/3c/438da7a55854c6d53b3677ff7190c9ec62fa29": "ae05ea5b575caba71f000f49ad7d87c1",
"oreicaidobael/.git/objects/46/65f1a2024e412a8e7d0e388d11b9517b16d168": "d721341699861defa49cd2eb73353b15",
"oreicaidobael/.git/objects/49/424e72cf8d559460bc611befc9be6544196548": "45b1d8483070867d09664659f2450b02",
"oreicaidobael/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"oreicaidobael/.git/objects/53/c50ee84f30774ffbdf42db2a06d879aa04f4a0": "5104f7be4754bde46f2f2032e062f322",
"oreicaidobael/.git/objects/56/9934e912cfc1ce91e6c2623167270737c19a4f": "904c106cb7d2bf551388936786ef52af",
"oreicaidobael/.git/objects/6e/4c2496714bb8b9a0ddd381cfe2fcc0bac14ba8": "6d5a3a3e6342421962a0c41eb1797acd",
"oreicaidobael/.git/objects/6e/8c907dcdd970b25ddf5b252ed67417d1a3ef18": "c623ba7be5328f0e7bac73cabc53a562",
"oreicaidobael/.git/objects/6f/01277cc181e585d7a60f632adf4a0ac3010d57": "4c69f7a2ad7df679cc060f8e976d7753",
"oreicaidobael/.git/objects/74/e107ca073191e8dc817f2dcfb60c8f6b95bccc": "24aab504f6a7ee74a0319b184641bb4a",
"oreicaidobael/.git/objects/76/6fe3843660d3bf89bd4fa1582bacfe8e57b379": "980dc4d489decb1f8a0f743648911e6a",
"oreicaidobael/.git/objects/76/87dac3ae80941e1efd42b1e0b4b0ba6d3f49f5": "2efdb88991fe445deeaabd17ffd3d298",
"oreicaidobael/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"oreicaidobael/.git/objects/7f/7598bc02b683e92e42e6a6d0649813409996cd": "dc548e2d71156651274c7c2bca618c72",
"oreicaidobael/.git/objects/80/dcc565b0fb4dcbec9e099fad51eecbbe67a4e8": "2fc7c4646726a5f3d9bd30de029a71ae",
"oreicaidobael/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"oreicaidobael/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"oreicaidobael/.git/objects/8c/62aefabd700dd6e452a5d1ecbe4c2bd2b4b83c": "b2925d23955e6281994d4886f452e0f9",
"oreicaidobael/.git/objects/8f/c12d7806c5d38418b7a8f151dcbf6e885df263": "0b4a0148c138be086a3851e324ff9ec2",
"oreicaidobael/.git/objects/99/442525f3f8b75adf183e411ae804c878fe8370": "08ec4e1e592892ac7c6eefebc1a003a6",
"oreicaidobael/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"oreicaidobael/.git/objects/a8/4029ecf728a391db7a63be5bd23621d50f8b06": "5e7a8dcdc0ef99117cf7685839d62cd0",
"oreicaidobael/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"oreicaidobael/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"oreicaidobael/.git/objects/af/3bf31084fbcb86d5889e0a239c4c6dcaf46f77": "76f6b6d2ea9450ccd4d4126f83acd971",
"oreicaidobael/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"oreicaidobael/.git/objects/b9/c4a74fe2e61ca62aceb6034d29745abf181227": "8c1dc4713cbe4b2237b76ad821666961",
"oreicaidobael/.git/objects/bc/eba338b8c71fce20131bbad763d5efd4fcd19c": "527c2cc4c20d25eab420690e41b3682e",
"oreicaidobael/.git/objects/c7/8c6c661896b7e65572a4650ae766461d23ef92": "3f016ef85ae869b5b9bbcbd0fcdcee37",
"oreicaidobael/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"oreicaidobael/.git/objects/e7/926942f9a2d07b4fb2a6f180ba3bfd708753b3": "15f95cbef37fad2b75c88f5153d14a0d",
"oreicaidobael/.git/ORIG_HEAD": "46b8565a1653a6c4872c087429e029c8",
"oreicaidobael/.git/refs/heads/main": "e89e23828ab7a3f46ee529a8e9ef674a",
"oreicaidobael/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"oreicaidobael/.git/refs/remotes/origin/main": "e89e23828ab7a3f46ee529a8e9ef674a",
"oreicaidobael/assets/AssetManifest.json": "67445c1e62274d440242c3b950681fc6",
"oreicaidobael/assets/FontManifest.json": "40468c7c60c4889cff63fc93cc537fad",
"oreicaidobael/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"oreicaidobael/assets/lib/assets/columbiaserialmediumregular.ttf": "5259ed8470fbbf98948cb80bda291c2d",
"oreicaidobael/assets/lib/assets/images/ORDEM%2520LOGO.png": "051dd2ad79f774f3270338bd41a806e2",
"oreicaidobael/assets/lib/assets/images/public_assets_dice%2520(1).gif": "e0b9cd50cb5f07591973d1853c6d7602",
"oreicaidobael/assets/NOTICES": "681fac49c22b34e9100b7988f7a4103c",
"oreicaidobael/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"oreicaidobael/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"oreicaidobael/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"oreicaidobael/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"oreicaidobael/index.html": "22ac6d787b968ccd449c9877f9be6c8c",
"oreicaidobael/main.dart.js": "d9a8c7113285f2b8c8b37cc27f70822d",
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
