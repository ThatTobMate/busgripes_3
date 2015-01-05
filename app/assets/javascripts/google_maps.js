var mapStyle = [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]

$(document).ready(function(){
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mapStyle

  }, internal: {id: 'map'}}, function(){
  gripeMarkers = []
  // nb can attach any other info to marker here
  $.each(gripes_data, function(i,gripe){
    var gripe_marker = {"lat": gripe.latitude, "lng": gripe.longitude}  
    gripeMarkers.push(gripe_marker)
  });

  })

    markers = handler.addMarkers(gripeMarkers);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();

    // heatmap = new google.maps.visualization.HeatmapLayer({
    // data: gripeMarkers});
    // heatmap.setMap(map);
    // function toggleHeatmap(){
    // heatmap.setMap(heatmap.getMap() ? null : map);
    // }

  });
// });

