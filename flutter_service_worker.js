'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "827ecaf7ac742252a28b64c129315277",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "464410b744699024b1c7a2093f8151e8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "507e4dcad7b6e0ea15a8820c40e76fae",
".git/logs/refs/heads/main": "1576eabca342470209001a8a5092326d",
".git/logs/refs/remotes/origin/main": "c3731b345cd6bbfa544d8869fa2ed611",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/79e9f4c25e8b502e79c79ba666e0b6eb3a0ec8": "d4d37ac5edb14880ba88dfdf254d3666",
".git/objects/0d/e7f39685a088c6137a9741ad7e24862683b227": "2245c4fc16b1a18a73c2d2f3b9224a26",
".git/objects/0e/e4e10a6c64847e0865010fc93d28552a9054bd": "61eb39cf1cf4919890b30677adc423eb",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/1c/6003d6378be684f6f986933f928e0dd3316bc4": "83c7e91aaa1fe78523cf78d924e9ec61",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/21/0c10d2d3bb9b00a805c396c8d69400fe85b1a4": "16b9df40badeb11a3c2cb7164fe0e949",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/23/0e54db337e364d1a007603148e84defa7fddcd": "543da53ae6a34036e4695e939eb67f77",
".git/objects/25/bd74627a92d3e63f53a2d6a78cae338c2fbe81": "94f00d24ec2124bdfdcfa6f80fe81f32",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/33/60bad252fedb54b45bb6a42899567df2ad1a00": "df2963a94eec1b703a0543d3e50ba6b3",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/4cbaa04ce068273cd35657e8a7ac4f45189a66": "8166907e3d13b425c55769b121d87e14",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/5768bc5ef7b9812622ef3d8eff82d713283b82": "5113b1ee72ebb8784d96c605f136c6cc",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/918fd9118773b477f5b3716eb7779c381282fa": "ca12191677e145fb2149e087bd7f1b9e",
".git/objects/43/01175a7434583ccec414ea0699480df90e396e": "fc9cb210082612248f11a2b8be8b13d7",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/4a/275f3dd88643f4119b4b31a125429ab8a4918b": "b62b3304fbb19676cd624113cdc844a4",
".git/objects/4b/d2d0d05bca6cab6a262962b4318532805aeb93": "2d0ad4d0641e6d72d0204784d2bb011e",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/52/fe6c91fc45b9c26f093968f98a9ff890821639": "8c447d93ee109857feae4f68a0ef34e2",
".git/objects/55/4a82b00590e3fd77ad6736cf22aaac5e358044": "157856f82c7142bffafcc3b9b596b5d4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/f1751b24aa64afd1ea74ceafae3b72c37b0d0c": "56b3f88068a5ad8442e058aa73b46438",
".git/objects/68/dad2d8a1134c6818f45ab4501ddd1fc0fa0f49": "1c26f64dfd6e4ced0fca374549b9c51e",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/ab01a010338f46b401b73c3c366e072bd00b83": "8043c686ae1450521af6b5436275805d",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/63a16ec1df17bb04fab18857b8ef9d0722435c": "ac4dece3995c40ff354b9f40f982a98c",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/75/48687a48759f7164d969649e35cec6bfd0b602": "c6bf9765d87579ce91a5559de8f246fa",
".git/objects/79/6831cb3967825470a1c8569e363a4f29d6332f": "d283d2782635415d89ce5d4c10d85927",
".git/objects/7e/e2869abb8e1f215b9a24eb6c961805ada2e79f": "976dadc5fe22bd2a7ba6400bdc6ad544",
".git/objects/82/cdac91fad0918e1d5c11cb229ae55361766824": "90956a8ec0ec0733076c7be33961bb12",
".git/objects/89/ee61462c35abe4497dfafde5ded9147ad7848c": "575f8da75299c1abceefd3c5d4050845",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/de0fbefbb0eb36b1683a02ad1e2d98289f1f5b": "498f2ada203c660ac060e9a82b5990da",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9a/ba4600d44bb3451cbb3c1089057f511eb65b83": "31abf642416ffe2eb8566fe240c0e041",
".git/objects/9c/c2d3e2261d46be3632227046415a8ed9ca248d": "c91c05185a6a6002322d802e6473ce7a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/a09c913110ba11eb8adb666b4a24a35e66f54b": "6200d0aab0926b026b82a7ba759f4f7b",
".git/objects/a7/a5e63bedc24f450af5b8f617d07e2e9c1e64d4": "951bff3abacde67196a4156c23fd8bdd",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/36616aa7808323e5bb5f46608eea7397fa2061": "12c15480b7f62c94baa740db9138594a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b8/a0005e542e012c307e61f958d198806d4c3dfa": "c0ac1c8559459eccd248dd52c86091f3",
".git/objects/ba/8d7d4d193aeda248d2d3692397873a41490e65": "9c94870b374da8e0bdabb4c836d71968",
".git/objects/bd/a3c7b3dabab78ea6c0a82cb2798f37f4200f5b": "9a7b642f39e11e5c2593db7f9dc8d9ce",
".git/objects/bf/5b325c33d09f715a1184577f7b037aa9ff0342": "2905f9094a6495c03625b9b3c25373b8",
".git/objects/c0/c494d9571ba71bac244c660d926e67164361d8": "f9cf0f1752d2f4b1dd93fa4463c15e40",
".git/objects/c2/3c850b719ad5f846c97af623c03ace7ce0b283": "c9727b2349496336e69d582692063a1a",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cd/783b42064076a8342c0572cf4e4a25dbd7b353": "b7d15a31df29d412573dc83945a842cb",
".git/objects/d2/6da585d9d24e044c96c182db435e2aeecda884": "766dc22c9177965f0604a7d65170a833",
".git/objects/d3/081cf277773ce6dbc02de32eda6a1a81f262bc": "075fd961b52d482682e7cbc1a652e59b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/ba2bf0f5412686c30cba0d683053574568deb7": "06896c9b2fead2466eafa903978c1ca0",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e6/b2fd705a5b6f45612868e88a136846c8636fac": "5969f316b7e178c0865389e31a117c58",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5d4ac75c8725a49be86adc6772006ab2d2b7ac": "e73dc97b213808979c3eb791dece69d6",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/refs/heads/main": "1bca1c934cee4a4a95dd698d01bc998d",
".git/refs/remotes/origin/main": "1bca1c934cee4a4a95dd698d01bc998d",
"assets/AssetManifest.bin": "2ff52066e94269326a8c0ff1f70176a5",
"assets/AssetManifest.bin.json": "649f39f3eaf7be7b15b70bf358490040",
"assets/AssetManifest.json": "454b18e2e9e46a6cb3154f3f0a034a9d",
"assets/assets/failure2.mp3": "c02700fa0fb5dad808dc7d30bee52293",
"assets/assets/fanfare.mp3": "de7c0cf36488e8bae779a91a49d5d0cd",
"assets/assets/newlevel.mp3": "47aecd9193c0d95375cd88850b3a380f",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "6239254df5762b636b42c84eaceed06d",
"assets/NOTICES": "18ad232851d26697c007dfa39cdf2edc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8e85de6cacf4615ca8ef8fe11ad9f91e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_donation_buttons/assets/coffee.png": "2159a0ac84d49abbdb353eaaf502eeb8",
"assets/packages/flutter_donation_buttons/assets/coffee2.png": "1446f4880b85af9912f34dd705a371f5",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_paypal/lib/src/assets/img/cloud_state.png": "e695e021561a6d9754f06038b4d6b1d9",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7a24678ebcca25e8b39139b12307477a",
"icons/android_ic_launcher-144x144.png": "f1ca55d6bc22bb0afffc7b817785b154",
"icons/android_ic_launcher-192x192.png": "8355c6028c19f0fa8003273377c773c9",
"icons/android_ic_launcher-36x36.png": "2453d3cbf22502916fda8248b1dd0563",
"icons/android_ic_launcher-48x48.png": "af82fc0e6e48690bbc8979d0177075d0",
"icons/android_ic_launcher-96x96.png": "f1590bccded515ec3ce5710fc1f2279a",
"index.html": "b4817dc06a329715f2f29a8f6359efb0",
"/": "b4817dc06a329715f2f29a8f6359efb0",
"main.dart.js": "c3b9a6bd817a3f151e789e76b34fbb24",
"manifest.json": "416e89c5e619c07a01a08126aa2a7698",
"version.json": "929cf31c733334d83f1492f7c65a6629"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
