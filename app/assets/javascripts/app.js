$(document).ready(function(){
  var text = document.getElementById("comms");
  debugger

  function getLocation() {
    var latitude = '';
    var longitude = '';
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
      } else { 
          text.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function showPosition(position) {
      text.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;  
  }

  $('.geolocation-button').click(getLocation);

  console.log(latitude + " " + longitude);

});

