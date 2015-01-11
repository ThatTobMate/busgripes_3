// muted -greys browns and greens
// var mapStyle = [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#abbaa4"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#8c7a3f"}]},{"featureType":"road.highway","stylers":[{"color":"#ad9b8d"}]}]

// grey
// var mapStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"color":"#052366"},{"saturation":"-70"},{"lightness":"85"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"-53"},{"weight":"1.00"},{"gamma":"0.98"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"saturation":"-18"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#57677a"},{"visibility":"on"}]}]

// blue
// var mapStyle = [{"featureType":"water","stylers":[{"color":"#021019"}]},{"featureType":"landscape","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"transit","stylers":[{"color":"#146474"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]}]

  //lunar landscape!
  // var mapStyle = [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
  // #3c3a43
  var mapStyle = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":-80},{"lightness":30},{"gamma":0.5},{"hue":"#3c3a43"}]}]

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
    

