$(document).ready(function(){

  // menu button +++++++++++++++++++

$('nav button').click(function() {
  $(this).toggleClass('expanded').next('ul').slideToggle(200);
});


// $('.menu button').click(function() {
//   $(this).toggleClass('expanded').siblings('li').slideToggle().css("display": "block;");
// });



  // geolocation ++++++++++++++++++++
  var text = $('#comms');
  var geoLat;
  var geoLong;


  function showPosition(position) {
      geoLat = parseFloat(position.coords.latitude);
      geoLong = parseFloat(position.coords.longitude);
      $('#gripe_latitude').val(geoLat);
      $('#gripe_longitude').val(geoLong);
      console.log(geoLat + " " + geoLong);
  }

  function getLocation() {
    console.log('getlocation is being called')
      geoLat = null;
      geoLong = null;
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
          text.innerHTML = "Geolocation not supported by this browser or permission denied.";
      }
  }

  function hideAddress() {
    console.log("hideAddress is being called")
    $('.address-input input, .address-input label').hide();
    $('.address-input').append('<p>Thank you. Current location logged.</p>')
  }

  function hideDatetime(){
    $('.date-time-select').hide();
    $('.ten-min-selected').append('<p>Thank you. Past ten minutes selected.</p>')
  }

  $('.geolocation-button').on('click', function(){
    getLocation();
    hideAddress();
  });

  $('.time-button').on('click', hideDatetime);

});

