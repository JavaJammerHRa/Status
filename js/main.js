/**
 * Created by hrasuli on 23/02/2017.
 */   
     // var APIkey = "AIzaSyCDIMbudMJpS6eIvDWZRpKmPr5l4ISGRKQ" ;
     //51.525654, -0.114662
     //51.46 -2.79
    var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.52, lng: -0.11},
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
      
    //     //Avon and somerset 
    // var Avonsomerset = new google.maps.KmlLayer({
    //       //url: 'https://dl.dropboxusercontent.com/content_link/ZOq9NUq1ifw2sxzxKgPoPWwO8irCFB1SG07GiPRgfEQQuoYlRFszjw58OQRSw1gP/file?dl=1',
    //       url: 'https://sites.google.com/site/kmlhosting2919/kml/avon-and-somerset.kml?attredirects=0&d=1',
    //       preserveViewport:false,
    //       suppressInfoWindows: true,
    //       map: map
    //   });

//Converted KML to geoJSON data
var Avonsomerset = new google.maps.Data();
var Devon = new google.maps.Data();

Avonsomerset.loadGeoJson('http://localhost/status/data/avon-and-somerset.geojson');
Devon.loadGeoJson('http://localhost/status/data/devon-and-cornwall.geojson');
 //var avon = map.data.loadGeoJson('http://localhost/status/data/avon-and-somerset.geojson');
 


 // global infowindow
  var infowindow = new google.maps.InfoWindow();

  // When the user clicks, open an infowindow
  Avonsomerset.addListener('click', function(event) {
Avonsomerset.setStyle({
  strokeColor: 'yellow',
  strokeWeight: 4,
  fillColor: 'green',
  fillOpacity: 0.5
 });

 
       var myHTML = event.feature.getProperty("description");
       console.log(myHTML);
       infowindow.setContent("<div style='width:150px; text-align: center;'>"+myHTML+"</div>");
    //  // infowindow.setPosition(event.feature.getGeometry().get());
    //   infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
       infowindow.open(map);
  });  





    // When the user clicks, open an infowindow
  Devon.addListener('click', function(event) {
Devon.setStyle({
  strokeColor: 'yellow',
  strokeWeight: 4,
  fillColor: 'green',
  fillOpacity: 0.5
 });

 
       var myHTML = event.feature.getProperty("description");
       console.log(myHTML);
       infowindow.setContent("<div style='width:150px; text-align: center;'>"+myHTML+"</div>");
    //  // infowindow.setPosition(event.feature.getGeometry().get());
    //   infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
       infowindow.open(map);
  });  
// avon.google.maps.event.addListener('click', function(geoJsonEvent){

//   //   var text = geoJsonEvent.featureData.name;
//   //  console.log(JSON.stringify(geoJsonEvent));
//   //  console.log(text);
//    console.log(map.getZoom());
// })
//       // place marker
// google.maps.event.addListener(Avonsomerset,'click', function(kmlEvent){
//    var text = kmlEvent.featureData.name;
//    console.log(JSON.stringify(kmlEvent));
//    map.data.setStyle({
//           fillColor: 'green',
//           strokeWeight: 10
//         });
//   //Avonsomerset.setOptions({fillColor: "#0000FF", strokeColor: "#0000FF", fillOpacity: 0.3});
//    console.log(text);
//    console.log(map.getZoom());
//    var text = kmlEvent.featureData.description;
//   showSideWindow(text);
    
// });

//           //google example 
//     var gg = new google.maps.KmlLayer({
//           url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml'
//         });
//   gg.setMap(map);

// google.maps.event.addListener(gg, 'click', function(kmlEvent){
//     var text = kmlEvent.featureData.name;
//    //console.log(JSON.stringify(kmlEvent));
//    console.log(text);
//    console.log(map.getZoom());
// })

      //  // Define the LatLng coordinates for the polygon's path.
      //   var triangleCoords = [
      //     {lat: 25.774, lng: -80.190},
      //     {lat: 18.466, lng: -66.118},
      //     {lat: 32.321, lng: -64.757},
      //     {lat: 25.774, lng: -80.190}
      //   ];

      //   // Construct the polygon.
      //   var bermudaTriangle = new google.maps.Polygon({
      //     paths: triangleCoords,
      //     strokeColor: '#FF0000',
      //     strokeOpacity: 0.8,
      //     strokeWeight: 2,
      //     fillColor: '#FF0000',
      //     fillOpacity: 0.35
      //   });
      //   bermudaTriangle.setMap(map);

        //   function showSideWindow(text) {
  //   var sidediv = document.getElementById('content-window');
  //   sidediv.innerHTML = text;
  // }
      Avonsomerset.setMap(map);
      Devon.setMap(map);
    }
    
