$(document).ready(function() {
    $('.work-block').each(function(index) {
        $(this).click(function() {
            console.log("HOV");
            console.log("Data: " + $(this).data("type"));
            console.log($(this).find('img').attr("src"));
        });
    });
    
    // Enable smooth scroll with click-to-navigate
    $.localScroll({duration:300});

	AOS.init({
		offset: 200,
		easing: 'ease-out-quart'
	});
    
    $("#lightgallery").lightGallery(); 
})

// function myMap() {
//     var mapOptions = {
//       center: new google.maps.LatLng(47.286629, -121.102275),
//       zoom: 15
//     }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }

// function initMap() {

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: {lat: 47.286711, lng: -121.102323}
//   });

//   // Create an array of alphabetical characters used to label the markers.
//   var labels = 'ABC';

//   // Add some markers to the map.
//   // Note: The code uses the JavaScript Array.prototype.map() method to
//   // create an array of markers based on a given "locations" array.
//   // The map() method here has nothing to do with the Google Maps API.
//   var markers = locations.map(function(location, i) {
//     return new google.maps.Marker({
//       position: location, 
//       label: labels[i % labels.length]
//     });
//   });

//   // Add a marker clusterer to manage the markers.
//   var markerCluster = new MarkerClusterer(map, markers,
//       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

// var locations = [
//   { 47.286711, -121.102323},
//   {47.273818,  -121.074068},
//   { 47.292557,  -121.097482}
// ]


// function initMap() { 
//   // var locations = [

//   var home = {  lat: 47.286711, lng: -121.102323};
//   var cascade = {lat: 47.273818, lng: -121.074068};
//   var snowshoe = {lat: 47.292557, lng: -121.097482};

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: home
//   });

//   var timberContent = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Timber Cove</h1>'+
//       '<div id="bodyContent">'+
//       '<p><b>Timber Cove</b>, this is where the beautiful  ' +
//       'lakefront getaway resides. Overlooking the beautiful lake Cle Elum.</p>'+
//       ' <a href="#">'+
//       'Explore the Home</a> '+
//       '</div>'+
//       '</div>';


//       marker = new google.maps.Marker({

//         position: home,
        
//         map: map,
        
//         title: markers[i][0],
        
//         info: new google.maps.InfoWindow({content: timberContent});
        
//         });
// }
// //   var cascadeContent = '<div id="content">'+
// //   '<div id="siteNotice">'+
// //   '</div>'+
// //   '<h1 id="firstHeading" class="firstHeading">Cascade Playtime Rentals</h1>'+
// //   '<div id="bodyContent">'+
// //   '<p><b>Cascade Playtime Rentals</b>, is an amazing rental shop that features ' +
// //   'a massive inventory of dirt bikes, snowmobiles, boats and jet skis so you can experience'+
// //   'mountain fun no matter the season, whether its on the lake or in the snow.</p>'+

// //   ' <a href="#">'+
// //   'Check out Their Rental Inventory</a> '+
// //   '</div>'+
// //   '</div>';
// //   var infoWIndow = new google.maps.InfoWindow({
// //     content: cascadeContent
// //     });
// //   var cascadeRental = new google.maps.Marker({
// //     position: cascade,
// //     map: map,
// //     title: 'Cascade Playtime Rentals (Ayers Rock)'
// //   });
// //   google.maps.event.addListener( cascadeRental, 'click', function() {

// //     infoWindow.setContent( this.info );
// //     infoWindow.open( map, this );
 
// //  });


  

// // }

// // var map;
// // var Markers = {};
// // var infowindow;
// // var locations = [
// // 	[
// // 		'Samsung Store Madeleine',
// // 		'<strong>Samsung Store Madeleine</strong><p>5 Boulevard Malesherbes, 75008 Paris<br>10h – 20h</p>',
// // 		48.8701925,
// // 		2.322897600000033,
// // 		0
// // 	],
// // 	[
// // 		'Samsung Store Velizy',
// // 		'<strong>Samsung Store Velizy</strong><p>CC Velizy 2 <br>2 Avenue de l\'Europe <br>78140 Vélizy-Villacoublay<br>Niveau 0 Porte 3 <br>10h – 22h</p>',
// // 		48.78126899999999,
// // 		2.219588599999952,
// // 		1
// // 	]
// // ];
// // var origin = new google.maps.LatLng(locations[0][2], locations[0][3]);

// // function initMap() {
// //   var mapOptions = {
// //     zoom: 13,
// //     center: origin
// //   };

// //   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// // 	infowindow = new google.maps.InfoWindow();

// //     for(i=0; i<locations.length; i++) {
// //     	var position = new google.maps.LatLng(locations[i][2], locations[i][3]);
// // 		var marker = new google.maps.Marker({
// // 			position: position,
// // 			map: map,
// // 		});
// // 		google.maps.event.addListener(marker, 'click', (function(marker, i) {
// // 			return function() {
// // 				infowindow.setContent(locations[i][1]);
// // 				infowindow.setOptions({maxWidth: 200});
// // 				infowindow.open(map, marker);
// // 			}
// // 		}) (marker, i));
// // 		Markers[locations[i][4]] = marker;
// // 	}

// // 	locate(0);

// // }

// // function locate(marker_id) {
// // 	var myMarker = Markers[marker_id];
// // 	var markerPosition = myMarker.getPosition();
// // 	map.setCenter(markerPosition);
// // 	google.maps.event.trigger(myMarker, 'click');
// // }

// // google.maps.event.addDomListener(window, 'load', initialize);

