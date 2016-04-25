function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

  var places = [
    {address: "Chicago, IL", description: "The windy city!"},
    {address: "2413 S Western Ave, Chicago, IL", description: "An apartment!"}
  ];
  places.forEach(function(place) {
    geocoder.geocode({'address': place.address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        var infowindow = new google.maps.InfoWindow({
          content: place.description
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
    });
  });
  // for (var i = 0; i < places.length; i++) {
  //   var description = places[i].description;
  //   geocoder.geocode({'address': places[i].address}, function(results, status) {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       map.setCenter(results[0].geometry.location);
  //       var marker = new google.maps.Marker({
  //         map: map,
  //         position: results[0].geometry.location
  //       });
  //       var infowindow = new google.maps.InfoWindow({
  //         content: description
  //       });
  //       marker.addListener('click', function() {
  //         infowindow.open(map, marker);
  //       });
  //     } else {
  //       console.log('Geocoder failed because: ' + status);
  //     }
  //   });
  // }
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}