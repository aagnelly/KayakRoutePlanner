

      // This example creates an interactive map which constructs a polyline based on
      // user clicks. Note that the polyline only appears once its path property
      // contains two LatLng coordinates.

      var poly;
      var map;
      var places = ['Start of Susquehanna', 'Susquehanna State Forest'];
      var latitudes = [42.700947, 42.560365];
      var longitudes = [-74.919718, -74.943518];
      var distance = 0;
      var miles;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 42.700947, lng: -74.919718}  // Center the map on Cooperstown.
        });

//	var marker = new google.maps.Marker({
//          position: {lat: 42.700947, lng: -74.919718},
//          map: map,
//          title: 'Start of Susquehanna'
//        })

	var marker = new Array();
	for(var i = 0; i < 2; i++){
	 marker = new google.maps.Marker({
		position: {lat: latitudes[i], lng: longitudes[i]},
		map: map,
		title: places[i]
})
}


        poly = new google.maps.Polyline({
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        poly.setMap(map);

        // Add a listener for the click event
        map.addListener('click', addLatLng);
      }

      // Handles click events on a map, and adds a new point to the Polyline.
      function addLatLng(event) {
        var path = poly.getPath();

        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear.
        path.push(event.latLng);

	

        // Add a new marker at the new plotted point on the polyline.
/*        var marker = new google.maps.Marker({
          position: event.latLng,
          title: '#' + path.getLength(),
          map: map
        });
*/
	polyLengthInMeters = google.maps.geometry.spherical.computeLength(poly.getPath().getArray());
	//alert(polyLengthInMeters);
	miles = polyLengthInMeters/1609;
	document.getElementById('leg1').innerHTML = miles.toFixed(1);
      }
    
