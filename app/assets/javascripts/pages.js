function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });

  var places = [
    {lat: -25.363, lng: 131.044, description: "A place in Australia"},
    {lat: -33.8675, lng: 151.2070, description: "The main city, stuff happens here!"}
  ];
  // places.forEach(function(place) {
  //   var infowindow = new google.maps.InfoWindow({
  //     content: place.description
  //   });

  //   var marker = new google.maps.Marker({
  //     position: {lat: place.lat, lng: place.lng},
  //     map: map
  //   });
  //   marker.addListener('click', function() {
  //     infowindow.open(map, marker);
  //   });
  // });
  for (var i = 0; i < places.length; i++) {
    addMarker(places[i]);
  }

  function addMarker(place) {
    var infowindow = new google.maps.InfoWindow({
      content: place.description
    });

    var marker = new google.maps.Marker({
      position: {lat: place.lat, lng: place.lng},
      map: map
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
}
