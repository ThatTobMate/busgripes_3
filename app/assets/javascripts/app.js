$(document).ready(function(){

  // menu button

$('nav button').click(function() {
  $(this).toggleClass('expanded').next('ul').slideToggle(200);
});

// $('.menu button').click(function() {
//   $(this).toggleClass('expanded').siblings('li').slideToggle().css("display": "block;");
// });



  // // geolocation
  var commsElement = $('#comms');
  var geoLat;
  var geoLong;


  function showPosition(position) {
      geoLat = parseFloat(position.coords.latitude);
      geoLong = parseFloat(position.coords.longitude);
      $('#gripe_latitude').val(geoLat);
      $('#gripe_longitude').val(geoLong);
  }

  function getLocation() {
      geoLat = null;
      geoLong = null;
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
          text.innerHTML = "Geolocation is not supported by this browser or permission was denied.";
      }
  }

  function hideAddress() {
    $('.address-input input, .address-input label').hide();
    $('.address-input').append('<p>Thank you. Current location logged.</p>')
  }

  $('.geolocation-button').on('click', getLocation, hideAddress);

});

