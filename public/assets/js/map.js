


function initMap() {
    console.log('at maps');
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 40.7834338, lng: -74.2162569 },
        disableDefaultUI: true
    });
    $.post("/api/filter", function (data) {
            console.log(data);
        for (var i = 0, length = data.length; i < length; i++) {
            var results = data[i],
                latLng = new google.maps.LatLng(results.lat, results.lng);

            // Creating a marker and putting it on the map
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: results.name
            });
            
       
        }
        
    });

}
