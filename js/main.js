/**
 * Created by hrasuli on 23/02/2017.
 */   
     // var APIkey = "AIzaSyCDIMbudMJpS6eIvDWZRpKmPr5l4ISGRKQ" ;
     //51.525654, -0.114662
     //51.46 -2.79
    var map;
    var arrayOfPoly = [];
    var status;
    var st;
    var colour ;

    var today = new Date();
    var dd = today.getDate(); 
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

      if(dd<10) {
          dd='0'+dd
      } 

      if(mm<10) {
          mm='0'+mm
      } 

      today = dd+'/'+mm+'/'+yyyy;

  function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.52, lng: -0.13},
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP
  });

var avonsomerset = new google.maps.Data();
var bedfordshire = new google.maps.Data();
var devon = new google.maps.Data();
var dorset = new google.maps.Data();
var hampshire = new google.maps.Data();
var cambridgeshire = new google.maps.Data();
var cheshire = new google.maps.Data();
var cityOfLondon = new google.maps.Data();
var cleveland = new google.maps.Data();
var cumbria = new google.maps.Data();
var derbyshire = new google.maps.Data();
var durham = new google.maps.Data();
var dyfedPowys = new google.maps.Data();
var essex = new google.maps.Data();
var gloucestershire = new google.maps.Data();
var greaterManchester = new google.maps.Data();
var gwent = new google.maps.Data();
var hertfordshire = new google.maps.Data();
var humberside = new google.maps.Data();
var kent = new google.maps.Data();
var lancashire = new google.maps.Data();
var leicestershire = new google.maps.Data();
var lincolnshire = new google.maps.Data();
var merseyside = new google.maps.Data();
var metropolitan = new google.maps.Data();
var norfolk = new google.maps.Data();
var northamptonshire = new google.maps.Data();
var northernIreland = new google.maps.Data();
var northumbria = new google.maps.Data();
var northWales = new google.maps.Data();
var northYorkshire = new google.maps.Data();
var nottinghamshire = new google.maps.Data();
var southWales = new google.maps.Data();
var southYorkshire = new google.maps.Data();
var staffordshire = new google.maps.Data();
var suffolk = new google.maps.Data();
var surrey = new google.maps.Data();
var sussex = new google.maps.Data();
var thamesValley = new google.maps.Data();
var warwickshire = new google.maps.Data();
var westMercia = new google.maps.Data();
var westMidlands = new google.maps.Data();
var westYorkshire = new google.maps.Data();
var wiltshire = new google.maps.Data();

avonsomerset.loadGeoJson('http://localhost/status/data/avon-and-somerset.geojson');
bedfordshire.loadGeoJson('http://localhost/status/data/bedfordshire.geojson');
devon.loadGeoJson('http://localhost/status/data/devon-and-cornwall.geojson');
dorset.loadGeoJson('http://localhost/status/data/dorset.geojson');
hampshire.loadGeoJson('http://localhost/status/data/hampshire.geojson');
cambridgeshire.loadGeoJson('http://localhost/status/data/cambridgeshire.geojson');
cheshire.loadGeoJson('http://localhost/status/data/cheshire.geojson');
cityOfLondon.loadGeoJson('http://localhost/status/data/city-of-london.geojson');
cleveland.loadGeoJson('http://localhost/status/data/cleveland.geojson');
cumbria.loadGeoJson('http://localhost/status/data/cumbria.geojson');
derbyshire.loadGeoJson('http://localhost/status/data/derbyshire.geojson');
durham.loadGeoJson('http://localhost/status/data/durham.geojson');
dyfedPowys.loadGeoJson('http://localhost/status/data/dyfed-powys.geojson');
essex.loadGeoJson('http://localhost/status/data/essex.geojson');
gloucestershire.loadGeoJson('http://localhost/status/data/gloucestershire.geojson');
greaterManchester.loadGeoJson('http://localhost/status/data/greater-manchester.geojson');
gwent.loadGeoJson('http://localhost/status/data/gwent.geojson');
hertfordshire.loadGeoJson('http://localhost/status/data/hertfordshire.geojson');
humberside.loadGeoJson('http://localhost/status/data/humberside.geojson');
kent.loadGeoJson('http://localhost/status/data/kent.geojson');
lancashire.loadGeoJson('http://localhost/status/data/lancashire.geojson');
leicestershire.loadGeoJson('http://localhost/status/data/leicestershire.geojson');
lincolnshire.loadGeoJson('http://localhost/status/data/lincolnshire.geojson');
merseyside.loadGeoJson('http://localhost/status/data/merseyside.geojson');
metropolitan.loadGeoJson('http://localhost/status/data/metropolitan.geojson');
norfolk.loadGeoJson('http://localhost/status/data/norfolk.geojson');
northamptonshire.loadGeoJson('http://localhost/status/data/northamptonshire.geojson');
northernIreland.loadGeoJson('http://localhost/status/data/northern-ireland.geojson');
northumbria.loadGeoJson('http://localhost/status/data/northumbria.geojson');
northWales.loadGeoJson('http://localhost/status/data/north-wales.geojson');
northYorkshire.loadGeoJson('http://localhost/status/data/north-yorkshire.geojson');
nottinghamshire.loadGeoJson('http://localhost/status/data/nottinghamshire.geojson');
southWales.loadGeoJson('http://localhost/status/data/south-wales.geojson');
southYorkshire.loadGeoJson('http://localhost/status/data/south-yorkshire.geojson');
staffordshire.loadGeoJson('http://localhost/status/data/staffordshire.geojson');
suffolk.loadGeoJson('http://localhost/status/data/suffolk.geojson');
surrey.loadGeoJson('http://localhost/status/data/surrey.geojson');
sussex.loadGeoJson('http://localhost/status/data/sussex.geojson');
thamesValley.loadGeoJson('http://localhost/status/data/thames-valley.geojson');
warwickshire.loadGeoJson('http://localhost/status/data/warwickshire.geojson');
westMercia.loadGeoJson('http://localhost/status/data/west-mercia.geojson');
westMidlands.loadGeoJson('http://localhost/status/data/west-midlands.geojson');
westYorkshire.loadGeoJson('http://localhost/status/data/west-yorkshire.geojson');
wiltshire.loadGeoJson('http://localhost/status/data/wiltshire.geojson');


arrayOfPoly.push(
  [avonsomerset,"1","03:00","06/03/2017"],
  [bedfordshire,"0","02:20","06/03/2017"],
  [devon,"1","02:22","06/03/2017"],
  [dorset,"1","03:11","07/03/2017"],
  [hampshire,"1","02:31","23/03/2017"],
  [cambridgeshire,"1","03:00","06/03/2017"],
  [cheshire,"1","03:00","06/03/2017"],
  [cityOfLondon,"1","03:00","06/03/2017"],
  [cleveland,"1","03:00","06/03/2017"],
  [cumbria,"1","03:00","06/03/2017"],
  [derbyshire,"1","03:00","06/03/2017"],
  [durham,"1","03:00","06/03/2017"],
  [dyfedPowys,"1","03:00","06/03/2017"],
  [essex,"1","03:00","06/03/2017"],
  [gloucestershire,"1","03:00","06/03/2017"],
  [greaterManchester,"1","03:00","06/03/2017"],
  [gwent,"1","03:00","06/03/2017"],
  [hertfordshire,"1","03:00","06/03/2017"],
  [humberside,"1","03:00","06/03/2017"],
  [kent,"1","03:00","06/03/2017"],
  [lancashire,"1","03:00","06/03/2017"],
  [leicestershire,"1","03:00","06/03/2017"],
  [lincolnshire,"1","03:00","06/03/2017"],
  [merseyside,"1","03:00","06/03/2017"],
  [metropolitan,"1","03:00","06/03/2017"],
  [norfolk,"1","03:00","06/03/2017"],
  [northamptonshire,"1","03:00","06/03/2017"],
  [northernIreland,"1","03:00","06/03/2017"],
  [northumbria,"1","03:00","06/03/2017"],
  [northWales,"1","03:00","06/03/2017"],
  [northYorkshire,"1","03:00","06/03/2017"],
  [nottinghamshire,"1","03:00","06/03/2017"],
  [southWales,"1","03:00","06/03/2017"],
  [southYorkshire,"1","03:00","06/03/2017"],
  [staffordshire,"1","03:00","06/03/2017"],
  [suffolk,"1","03:00","06/03/2017"],
  [surrey,"1","03:00","06/03/2017"],
  [sussex,"1","03:00","06/03/2017"],
  [thamesValley,"0","03:00","06/03/2017"],
  [warwickshire,"1","03:00","06/03/2017"],
  [westMercia,"1","03:00","06/03/2017"],
  [westMidlands,"1","03:00","06/03/2017"],
  [westYorkshire,"1","03:00","06/03/2017"],
  [wiltshire,"1","03:00","06/03/2017"]);




 var setColourStyle = function(event){
  var active = event.getProperty("Active");
  var location = event.getProperty("Name");
  if(status == 2){
    colour = 'orange';
    console.log(location +" "+ colour +": "+active);
  }else if(status == 1){
    colour = 'green';
      console.log(location +" "+ colour +": "+active);
  }else{
    colour = 'red';
   console.log(location +" "+ colour +": "+active);
  }

  return {
  strokeColor: 'yellow',
  strokeWeight: 4,
  fillColor: colour,
  fillOpacity: 0.5
  }
 };

 function setColour(col){
  return {
    strokeColor: 'yellow',
    strokeWeight: 1.5,
    fillColor: col,
    fillOpacity: 0.4
  }
 };



  // global infowindow
  var infowindow = new google.maps.InfoWindow();

arrayOfPoly.forEach(function(element) {
  console.log(element[1]);
function maintenanceCheck(){
  var ll;
 if( today == element[3]){
    ll = true;
   
 }else{
   ll = false;
 }
 console.log(ll);
 return ll;
}
maintenanceCheck();



// if(element[1] == 1){
//   console.log("green");
//   colour = "green";
// }else if(today == element[3][0]){
//   console.log("orange");
// colour = "orange";
// }else{
//   console.log("red");
//   colour = "red";
// }


  // if(today == element[3][0]){
  //   console.log(element[0].setStyle({
  // strokeColor: 'yellow',
  // strokeWeight: 4,
  // fillColor: 'orange',
  // fillOpacity: 0.5
  //      }));
  // }else{
  //   element[0].setStyle(setColourStyle);
  //   console.log("error");
  // }







  //Check status and change colour of poly
  if(element[1] == 1){
    if(today == element[3]){
    status = "MAINTENANCE";
    console.log("MAINTENANCE");
    element[0].setStyle(setColour('orange'));
    }else{
    status = "ACTIVE";
    console.log("ACTIVE");
  element[0].setStyle(setColour('green'));
    }
  }else if(element[1]== 0){
    if(today == element[3]){
    status = "MAINTENANCE";
    console.log("MAINTENANCE");
    element[0].setStyle(setColour('orange'));
    }else{
    status = "INACTIVE";
    console.log("INACTIVE");
    element[0].setStyle(setColour('red'));
    }
  }


  // mouse over the polygon changes colour
  element[0].addListener('mouseover', function(event) {
  element[0].setStyle({
  strokeColor: 'yellow',
  strokeWeight: 5,
  fillColor: 'blue',
  fillOpacity: 0.4
       });
    //var contentString = event.feature.getProperty("Name"); + "<br>" + event.latLng;
    var name = event.feature.getProperty("Name");
    $(document).ready(function (e) {
    var $location = $("#location");
    $location.html("<h1>"+name+"</h1s>");
});

      //   var myHTML = event.feature.getProperty("Name");
      //  infowindow.setContent("<div style='width:150px; text-align: center;'>"+myHTML+"</div>");
      //  infowindow.setPosition(element[0].event.getGeometry().get());
      //  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
      //  infowindow.open(map);
  });  

  //mouse out changes back to the default colour
  element[0].addListener('mouseout', function(event) {
    element[0].setMap(null); // clear polygon from map
    element[0].setMap(map);
  if(element[1] == 1){
    if(today == element[3]){
    status = "MAINTENANCE";
    console.log("MAINTENANCE")
    element[0].setStyle(setColour('orange'));
    }else{
    status = "ACTIVE";
    console.log("ACTIVE")
  element[0].setStyle(setColour('green'));
    }
  }else if(element[1]== 0){
    if(today == element[3]){
    status = "MAINTENANCE";
    console.log("MAINTENANCE")
    element[0].setStyle(setColour('orange'));
    }else{
    status = "INACTIVE";
    console.log("INACTIVE")
    element[0].setStyle(setColour('red'));
    }
  }

}); 

//a white list from the public service and the exchange 
// xml filte// public services network 
//security advisor = andy moris 
/**
 * Spoke to Andrews Richard about the security side of the application,
 * he suggested that the best way to address the security aspect of the application is
 * to have google maps api added on a whitelist on the CPS network which 
 * would only allow specific data into the network instead of having sensitive data taken out 
 * and onto the public network. 
 * 
 */

  element[0].addListener('click', function(event) {
      //      var myHTML = event.feature.getProperty("Name");
      //  infowindow.setContent("<div style='width:150px; text-align: center;'>"+myHTML+"</div>");
      //  //infowindow.setPosition(event.feature.getGeometry().get());
      //  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
      //  infowindow.open(map);
  element[0].setStyle({
  strokeColor: 'blue',
  strokeWeight: 5,
  fillColor: 'blue',
  fillOpacity: 0.5
       });



    var contentString = event.feature.getProperty("Name"); + "<br>" + event.latLng;
    var name = event.feature.getProperty("Name");
    var getState = element[1];
    var maintenance = element[3];

    var state;
  if(element[1] == 1){
    if(today == element[3]){
    state = "MAINTENANCE";
    console.log("MAINTENANCE")
    element[0].setStyle(setColour('orange'));
    }else{
    state = "ACTIVE";
    console.log("ACTIVE")
  element[0].setStyle(setColour('green'));
    }
  }else if(element[1]== 0){
    if(today == element[3]){
    state = "MAINTENANCE";
    console.log("MAINTENANCE")
    element[0].setStyle(setColour('orange'));
    }else{
    state = "INACTIVE";
    console.log("INACTIVE")
    element[0].setStyle(setColour('red'));
    }
  }
    var duration = element[2];
    var div = "<div class='row'>" +
"  <div class='col-sm-4 col-md-2'>"+
  "  <div class='thumbnail'>"+
     " <img src='' alt=''>"+
      "<div class='caption'>"+
        "<h3>"+name +"</h3>"+
        "<p>" + state+': '+duration +"</p>"+
        "<p><a href='' class='btn btn-primary' role='button'>Button</a> <a href='' class='btn btn-default' role='button'>Button</a></p>"
      "</div>"+
    "</div>"+
  "</div>"+
"</div>";

var panel = "<div class='panel panel-primary'>"+ 
  "<div class='panel-heading'> <h2 class='panel-title'>"+name+"</h2>"+ 
  "</div>"+ 
"<div class='panel-body'><h4>"+ state+': '+"<div id='maintenance'>"+duration+"</div></h4>"+
"<h4>"+'Maintenance: '+maintenance +"</h4>"+
"</div>"+ 
"<div class='text-center'><a href='' class='btn btn-primary' role='button'>Refresh</a> <a href='' </a></div>"+
"</div>";
    console.log(element[2]);
    // infowindow.setContent(contentString);
    // infowindow.setPosition(event.latLng);
    // infowindow.open(map);
   // upTime('jan,01,2018,00:00:00');

    showSideWindow(panel);
    $(document).ready(function (e) {
    var $worked = $("#maintenance");

    function update() {
        var myTime = $worked.html();
        var ss = myTime.split(":");
        var dt = new Date();
        dt.setHours(0);
        dt.setMinutes(ss[0]);
        dt.setSeconds(ss[1]);
        
        var dt2 = new Date(dt.valueOf() + 1000);
        var temp = dt2.toTimeString().split(" ");
        var ts = temp[0].split(":");
        
        $worked.html(ts[1]+":"+ts[2]);
        setTimeout(update, 1000);
    }

    setTimeout(update, 1000);
});

});   
       element[0].setMap(map);
      // var interval = setInterval(function(){
      //   element.setMap(null);
      //   element.setMap(map);
      //   element.setStyle(setColourStyle);
      // },10000);

      

});//end of POLY FORLOOP

 
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

   


    function showSideWindow(text) {
    var sidediv = document.getElementById('content-window');
    sidediv.innerHTML = text;
  }
      // Avonsomerset.setMap(map);
      // Devon.setMap(map);
      // dorset.setMap(map);
      //poly();
    }
function clearPoly(element){
arrayOfPoly.forEach(function(element) {
    arrayOfPoly[element].setMap(null);
  });
}

function update(element,timeout) {
window.setInterval(function(){
  element.setMap(map);
  }, timeout)
}

// function poly(){
//  var getActive = function(event){
//   var active = event.getProperty("Active");
//   var location = event.getProperty("Name");
//   console.log(location+ " is "+active);
//   return active;
//  };
// arrayOfPoly.forEach(function(element) {
//   console.log("status is: " +element.getActive);
// });
// }

function upTime(countTo) {
  var now = new Date();
  var countTo = new Date(countTo);
  var difference = (now-countTo);

  var days=Math.floor(difference/(60*60*1000*24)*1);
  var hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  var mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  var secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

console.log("Days: " +days);
console.log("hours: " +hours);
console.log("mins: " +mins);
console.log("secs: " +secs);

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}

