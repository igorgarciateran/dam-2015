(function() {

    console.log('geolocation ...');

   

 var position = navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
    });

    var map;

    function initialize() {
        var mapOptions = {
            zoom: 8,

            center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    }

     google.maps.event.addDomListener(window, 'load', initialize);



})();
