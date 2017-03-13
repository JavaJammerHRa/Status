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
          center: {lat: 53.19, lng: -2.00},
          zoom: 6,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          panControl: true,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          overviewMapControl: true,
          rotateControl: true,
          styles: [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121'
      }
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
      color: '#616161'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
      color: '#4e4e4e'
      }
    ]
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d'
      }
    ]
  }
]
  });

// var myMapOptions  = [
//   {
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#212121'
//       }
//     ]
//   },
//   {
//     elementType: 'labels.icon',
//     stylers: [
//       {
//         visibility: 'off'
//       }
//     ]
//   },
//   {
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#757575'
//       }
//     ]
//   },
//   {
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#212121'
//       }
//     ]
//   },
//   {
//     featureType: 'administrative',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#757575'
//       }
//     ]
//   },
//   {
//     featureType: 'administrative.country',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#9e9e9e'
//       }
//     ]
//   },
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#bdbdbd'
//       }
//     ]
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#757575'
//       }
//     ]
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#181818'
//       }
//     ]
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//       color: '#616161'
//       }
//     ]
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#1b1b1b'
//       }
//     ]
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#2c2c2c'
//       }
//     ]
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#8a8a8a'
//       }
//     ]
//   },
//   {
//     featureType: 'road.arterial',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#373737'
//       }
//     ]
//   },
//   {
//     featureType: 'road.arterial',
//     elementType: 'labels',
//     stylers: [
//       {
//         visibility: 'off'
//       }
//     ]
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#3c3c3c'
//       }
//     ]
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels',
//     stylers: [
//       {
//         visibility: 'off'
//       }
//     ]
//   },
//   {
//     featureType: 'road.highway.controlled_access',
//     elementType: 'geometry',
//     stylers: [
//       {
//       color: '#4e4e4e'
//       }
//     ]
//   },
//   {
//     featureType: 'road.local',
//     stylers: [
//       {
//         visibility: 'off'
//       }
//     ]
//   },
//   {
//     featureType: 'road.local',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#616161'
//       }
//     ]
//   },
//   {
//     featureType: 'transit',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#757575'
//       }
//     ]
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#000000'
//       }
//     ]
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#3d3d3d'
//       }
//     ]
//   }
// ];


// map.setOptions(myMapOptions);

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
  [avonsomerset,"1","03:00","13/03/2017","13","avon-somerset.jpg"],
  [bedfordshire,"0","03:00","06/03/2017","27","bedfordshire.jpg"],
  [devon,"1","02:22","06/03/2017","41","devon.jpg"],
  [dorset,"1","03:11","13/03/2017","33","dorset.jpg"],
  [hampshire,"1","02:31","23/03/2017","22","hampshire.png"],
  [cambridgeshire,"1","03:00","06/03/2017","21","cambridgeshire.jpg"],
  [cheshire,"1","03:00","06/03/2017","25","cheshire.jpg"],
  [cityOfLondon,"1","03:00","06/03/2017","23","cityoflondon.png"],
  [cleveland,"1","03:00","06/03/2017","11","cleveland.png"],
  [cumbria,"1","03:00","06/03/2017","15","cumbria.png"],
  [derbyshire,"1","03:00","06/03/2017","15","derbyshire.png"],
  [durham,"1","03:00","06/03/2017","23","durham.jpg"],
  [dyfedPowys,"1","03:00","13/03/2017","89","dyfed.jpg"],
  [essex,"1","03:00","06/03/2017","26","essex.jpg"],
  [gloucestershire,"1","03:00","06/03/2017","23","gloucestershire.gif"],
  [greaterManchester,"1","03:00","06/03/2017","23","manchester.png"],
  [gwent,"1","03:00","06/03/2017","23","gwent.jpg"],
  [hertfordshire,"1","03:00","13/03/2017","23","hertfordshire.jpg"],
  [humberside,"1","03:00","06/03/2017","23","humbria.png"],
  [kent,"1","03:00","06/03/2017","23","kent.gif"],
  [lancashire,"1","03:00","06/03/2017","23","lancashire.jpg"],
  [leicestershire,"1","03:00","06/03/2017","23","leicestershire.jpg"],
  [lincolnshire,"1","03:00","06/03/2017","23","lincolnshire.jpg"],
  [merseyside,"1","03:00","06/03/2017","23","merseyside.jpg"],
  [metropolitan,"1","03:00","14/03/2017","23","met.jpg"],
  [norfolk,"1","03:00","06/03/2017","23","norfolk.png"],
  [northamptonshire,"1","03:00","06/03/2017","23","northamptonshire.jpg"],
  [northernIreland,"1","03:00","06/03/2017","23","northernIreland.gif"],
  [northumbria,"1","03:00","06/03/2017","23","northumbria.png"],
  [northWales,"1","03:00","06/03/2017","23","northwales.png"],
  [northYorkshire,"1","03:00","06/03/2017","23","northYorkshire.png"],
  [nottinghamshire,"1","03:00","06/03/2017","23","nottinghamshire.jpg"],
  [southWales,"1","03:00","06/03/2017","23","southwales.jpg"],
  [southYorkshire,"1","03:00","06/03/2017","23","southyorkshire.jpg"],
  [staffordshire,"1","03:00","06/03/2017","23","staffordshire.jpg"],
  [suffolk,"1","03:00","06/03/2017","23","suffolk.jpg"],
  [surrey,"1","03:00","06/03/2017","23","surrey.png"],
  [sussex,"1","03:00","06/03/2017","23","sussex.jpg"],
  [thamesValley,"0","03:00","06/03/2017","23","thamesvalley.jpg"],
  [warwickshire,"1","03:00","06/03/2017","23","warwickshire.jpg"],
  [westMercia,"1","03:00","06/03/2017","23","westmercia.jpg"],
  [westMidlands,"1","03:00","06/03/2017","23","westmidlands.jpg"],
  [westYorkshire,"1","03:00","06/03/2017","23","westyorkshire.jpg"],
  [wiltshire,"1","03:00","06/03/2017","23","wiltshire.jpg"]);




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

    var name = event.feature.getProperty("Name");
    $(document).ready(function (e) {
    var $location = $("#location");
    $location.html("<h1>More Detail</h1s>");
    });
}); 
//

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
    var messages = element[4];
    var image = element[5];

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
var statusColour = "danger";
if(state == "ACTIVE"){
  statusColour = "success";
}else if(state == "MAINTENANCE"){
  statusColour = "warning";
}

var pan2 = "<div class='text-center'>"+
"<a href='#' class='list-group-item active'>"+
   "<h3>" +name+"</h3></a></div>"+

"   <a href='#' class='thumbnail'> <img  style='height: 200px; width: 200px; display: block;'" +
  "src='logo/"+image+"' data-holder-rendered='true'> </a>"+
  "<a href='#' class='list-group-item list-group-item-"+statusColour+"'><h4>"+state+":  <span class='badge' id='maintenance'>"+duration+"</span></h4></a>"+
  "<a href='#' class='list-group-item list-group-item-info'><h4>Message Queue:  <span class='badge'>"+messages+"</span></h4></a>"+
  "<a href='#' class='list-group-item list-group-item-warning'><h4>Maintenance:  <span class='badge'>"+maintenance+"</span></h4></a>"
;
var panel = "<div class='panel panel-"+panel+"'>"+ 
  "<div class='panel-heading'> <h4 class='detailPanel'>"+name+"</h4>"+ 
  "</div>"+ 
"<div class='panel-body'><h4>"+ state+': '+"<div id='maintenance'>"+duration+"</div></h4>"+
"<h4>"+'Maintenance: '+maintenance +"</h4>"+
"<span class='label label-primary'>"+state+"<span class='badge'>"+duration+"</span>"+"</span>"+
"</div>"+ 
"<div class='text-center'><a href='' class='btn btn-primary' role='button'>Refresh</a> <a href='' </a></div>"+
"</div>";
    console.log(element[2]);
    // infowindow.setContent(contentString);
    // infowindow.setPosition(event.latLng);
    // infowindow.open(map);
   // upTime('jan,01,2018,00:00:00');
   var al = "<div class='alert alert-danger' role='alert'>ALERT THE DEPARTMENT</div>";

    showSideWindow(pan2);
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

        if(state == "INACTIVE" && myTime == "03:03"){

    $(document).ready(function (e) {
    var $alertDiv = $("#alert");
    $alertDiv.removeClass('hidden');
    $alertDiv.html("<h3>ALERT "+name+ " DEPARTMENT</h3>");
     //setTimeout($alertDiv.addClass('hidden'), 5000);
   // var intervalDiv = setInterval($alertDiv.addClass('hidden'), 1000); // Will alert every second.
// clearInterval(intervalID); // Will clear the timer.
});
   setTimeout(function(){
    var $alertDiv = $("#alert");
    $alertDiv.toggleClass('hidden');
   }, 5000);
          //alert("<div class='alert alert-danger' role='alert'>ALERT THE DEPARTMENT</div>");
        }
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

setInterval(function(){ 
  var randomNum = Math.round(Math.random() * 9) + 1;
  $('#cps').toggleClass('statusColour'); 
    // $('#mag').toggleClass('statusColour'); 
    $('.el').toggleClass('elem'); 
    $(".el").html("INACTIVE"); 
   setTimeout(function(){
  $('#cps').toggleClass('statusColour'); 
  // $('#mag').toggleClass('statusColour');  
  // $("active").css("color", "#c7254e");
  //  $("#inactive").css("color", "#c7254e");
  //   $("active").addClass("hidden");
  $(".el").html("ACTIVE"); 
   $('.el').toggleClass('elem'); 
   }, randomNum * 1000);

},10000);

setInterval(function(){ 
  var randomNumber = Math.round(Math.random() * 5) + 1;

    $('#mag').toggleClass('statusColour'); 
    $('.ma').toggleClass('elem'); 
    $('.ma').html("INACTIVE"); 
   setTimeout(function(){
  $('#mag').toggleClass('statusColour');  
  // $("active").css("color", "#c7254e");
  //  $("#inactive").css("color", "#c7254e");
  //   $("active").addClass("hidden");
  $('.ma').html("ACTIVE"); 
   $('.ma').toggleClass('elem'); 
   }, randomNumber * 1000);

},6000);
 
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

