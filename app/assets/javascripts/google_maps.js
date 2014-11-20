// function initialize() {
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(-34.397, 150.644)
//   };

//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }

// function loadScript() {
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
//       'callback=initialize';
//   document.body.appendChild(script);
// }

// window.onload = loadScript;

$(document).ready(function(){
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
    markers = handler.addMarkers([
      {
        "lat": 51.5072,
        "lng": 0.1275,
        // "picture": {
        //   // "url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
        //   "width":  36,
        //   "height": 36
        // },
        // "infowindow": "hello!"
      },
      {
        "lat": 51.5175,
        "lng": -0.1204,
      }  
    ]);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
  });
});
