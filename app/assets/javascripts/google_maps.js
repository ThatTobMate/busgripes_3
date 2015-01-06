var mapStyle = [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]

$(document).ready(function(){
  // heatmap = null;
  // handler = Gmaps.build('Google');
  // handler.buildMap({ 
  //   provider: {
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     styles: mapStyle
  //   }, 
  //   internal: {
  //     id: 'map'
  //   }
  // }, function() {
  //   gripeMarkers = []
  //   // nb can attach any other info to marker here
  //   $.each(gripes_data, function(i,gripe){
  //     var gripe_marker = {"lat": gripe.latitude, "lng": gripe.longitude}  
  //     gripeMarkers.push(gripe_marker)
  //   });

  //   var m = handler.getMap();

  //   markers = handler.addMarkers(gripeMarkers);
  //   handler.bounds.extendWith(markers);
  //   handler.fitMapToBounds();

  //   var pointArray = new google.maps.MVCArray(gripeMarkers);

  //   heatmap = new google.maps.visualization.HeatmapLayer({data: pointArray});

  //   heatmap.setMap(m);

  //   console.log(m)



function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(51.5072, 0.1275),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mapStyle
  };

  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  var gripeMarkers = [];
  var bounds = new google.maps.LatLngBounds();

    // nb can attach any other info to marker here
  $.each(gripes_data, function(i, gripe){
    var gripe_marker = new google.maps.LatLng(gripe.latitude, gripe.longitude);
    bounds.extend(gripe_marker);
    gripeMarkers.push(gripe_marker);
  });

  // bounds.extendWith(gripeMarkers);
  // map.fitMapToBounds();

  map.fitBounds(bounds)


  console.log(gripeMarkers)


  var pointArray = new google.maps.MVCArray(gripeMarkers);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });

  heatmap.setMap(map);
}

// function toggleHeatmap() {
//   heatmap.setMap(heatmap.getMap() ? null : map);
// }

  google.maps.event.addDomListener(window, 'load', initialize);
});

  // $("#toggleHeatmap").on("click", function(){
  //   debugger
  //   // heatmap.setMap(heatmap.getMap() ? null : map);
  // })
    

