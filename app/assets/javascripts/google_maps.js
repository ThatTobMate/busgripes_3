//for (i = 0; i < cars.length; i++) { 
//     text += cars[i] + "<br>";
// }


$(document).ready(function(){
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
  gripeMarkers = []
  // nb can attach any other info to marker here
  $.each(gripes_data, function(i,gripe){
    
    var gripe_marker = {"lat": gripe.latitude, "lng": gripe.longitude}  
    gripeMarkers.push(gripe_marker)

  })
    markers = handler.addMarkers(gripeMarkers);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
  });
});
