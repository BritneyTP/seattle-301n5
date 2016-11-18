(function(module){
  var map = {};

  function initMap(row) {
    // Create a map object and specify the DOM element for display.
    if(row){
      var cityone = row[0];
      var citytwo = row[1];
      console.log(cityone);
      var map = { lat:cityone.latitude,lng:cityone.longitude};
      map = new google.maps.Map(document.getElementById('map'),{
        zoom: 8,
        center: map
      });
      var marker = new google.maps.Marker({
        position:{lat:cityone.latitude,lng:cityone.longitude},
        map: map
      });
      var marker = new google.maps.Marker({
        position:{lat:citytwo.latitude,lng:citytwo.longitude},
        map: map
      });
    } else {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.611435, lng: -122.330456},
        scrollwheel: true,
        zoom: 8
      });
      var marker = new google.maps.Marker({
        position:{lat: 47.611435, lng: -122.330456},
        map: map
      });
    }
  }

  // TODID: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
  //webDB.execute(


  module.initMap = initMap;
  module.map = map;
})(window);
