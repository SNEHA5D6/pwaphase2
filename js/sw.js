this.addEventListener('install',function(event){
  event.waitUntil(
  caches.open('my cache').then(function(e){
    e.addAll([
      '/index.html',
      '/css/index.css'

    ])
  })
  )
})
// fetch event
this.addEventListener('fetch'function(event){
  event.respondWith(cache.open('my cache')
.then (function(cache){
  return cache.match(event.request)
.then(function(result){
  return result || fetch(event.request)
  .then(function(result){
    cache.put(event.request,request.clone());
     return result;
  })
})


})
)
})
