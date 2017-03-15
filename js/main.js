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
  [avonsomerset,"1","03:00","15/03/2017","13","avon-somerset.jpg"],
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
  [thamesValley,"0","03:00","15/03/2017","23","thamesvalley.jpg"],
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
    $location.html("<h2>"+name+"</h2>");
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
    $location.html("<h2>More Detail</h2s>");
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
 
   
    function showSideWindow(text) {
    var sidediv = document.getElementById('content-window');
    sidediv.innerHTML = text;
  }
  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
    var centerControlDiv14 = document.createElement('div');
  var centerControlDiv13 = document.createElement('div');
  var centerControlDiv12 = document.createElement('div');
  var centerControlDiv11 = document.createElement('div');
  var centerControlDiv10 = document.createElement('div');
  var centerControlDiv9 = document.createElement('div');
  var centerControlDiv8 = document.createElement('div');
    var resetControlDiv = document.createElement('div');
  
  var colourDiv1 = document.createElement('div');
  var colourDiv2 = document.createElement('div');
  var colourDiv3 = document.createElement('div');
  var colourDiv4 = document.createElement('div');
  var colourDiv5 = document.createElement('div');
  var colourDiv6 = document.createElement('div');
  var colourDiv7 = document.createElement('div');
  var colourDiv8 = document.createElement('div');
  var colourDiv9 = document.createElement('div');
  var colourDiv10 = document.createElement('div');
  var colour1 = new colourGrade(colourDiv1, map,"#57150F");
  var colour2 = new colourGrade(colourDiv1, map,"#791E15");
  var colour3 = new colourGrade(colourDiv1, map,"#8B2218");
  var colour4 = new colourGrade(colourDiv1, map,"#9C261C");
  var colour5 = new colourGrade(colourDiv1, map,"#AD2B1F");
  var colour6 = new colourGrade(colourDiv1, map,"#BF2F22");
  var colour7 = new colourGrade(colourDiv1, map,"#DA3D2F");
  var colour8 = new colourGrade(colourDiv1, map,"#E05E52");
  var colour9 = new colourGrade(colourDiv1, map,"#EA8E86");
  var colour10 = new colourGrade(colourDiv1, map,"#F3BEBA");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv1);
   map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv2);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv3);
     map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv4);
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv5);
       map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv6);
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv7);
         map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv8);
          map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv9);
           map.controls[google.maps.ControlPosition.TOP_RIGHT].push(colourDiv10);

  var centerControl14 = new CenterControl(centerControlDiv14, map,"14/03");
  var centerControl13 = new CenterControl(centerControlDiv13, map,"13/03");
  var centerControl12 = new CenterControl(centerControlDiv12, map,"12/03");
  var centerControl11 = new CenterControl(centerControlDiv11, map,"11/03");
  var centerControl10 = new CenterControl(centerControlDiv10, map,"10/03");
  var centerControl9 = new CenterControl(centerControlDiv9, map,"09/03");
  var centerControl8 = new CenterControl(centerControlDiv8, map,"08/03");
  var resetControl = new ResetControl(resetControlDiv, map,"REFRESH");


  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv14);
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv13);
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv12);
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv11);
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv10);
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv9);
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv8);
  map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(resetControlDiv);
    }

var chicago = {lat: 41.85, lng: -87.65};

/**
 * The CenterControl adds a control to the map that recenters the map on
 * Chicago.
 * This constructor takes the control DIV as an argument.
 * @constructor
 */
function CenterControl(controlDiv, map, date) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.height = "25px";
  controlUI.style.width = "50px";

  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid ';
  //controlUI.style.borderRadius = '5px';
 // controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.padding = "2px";
  controlUI.style.marginBottom = '15px';
  controlUI.style.marginRight = '0px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Historical Activity Data';
  controlDiv.appendChild(controlUI);


  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = date;
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {

    arrayOfPoly.forEach(function(element) {
          var randomN = Math.round(Math.random() * 9) + 1;
    var colour = randomColour(randomN);
      element[0].setMap(null);
      console.log(randomN);
        element[0].setStyle(setColourCal(colour));
        element[0].setMap(map);

    });
    
  });

  controlUI.addEventListener('mouseover', function() {
  //controlUI.style.backgroundColor = '#dff0d8';
    controlUI.style.borderBottomColor = "rgb(255, 235, 59)";
    controlUI.style.backgroundColor = '#368bcc';
    controlUI.style.borderBottomWidth = "3px";
    controlUI.style.borderRadius = "3px";
  controlDiv.appendChild(controlUI);
});

  controlUI.addEventListener('mouseout', function() {
  controlUI.style.backgroundColor = '#fff';
   controlUI.style.borderBottomWidth = "0px";
  controlDiv.appendChild(controlUI);
  });
}

function colourGrade(controlDiv, map, colour) {

  var keyUI = document.createElement('div');
  keyUI.style.height = "20px";
  keyUI.style.width = "20px";
  keyUI.style.boxShadow = " 0 2px 3px #181818";
  keyUI.style.backgroundColor = colour;
  keyUI.style.marginRight = '15px';
  keyUI.style.textAlign = 'center';
  keyUI.title = 'colour grade';
  controlDiv.appendChild(keyUI);

}

/**
 * This constructor takes the control DIV as an argument.
 * @constructor
 */
function ResetControl(controlDiv, map, text) {

  var keyUI = document.createElement('div');
  // keyUI.style.height = "0px";
  // keyUI.style.width = "20px";
  keyUI.style.boxShadow = " 0 2px 3px #181818";
   keyUI.style.borderRadius = "5px";
  keyUI.style.backgroundColor = "#2C85F2";
  keyUI.style.cursor = 'pointer';
  keyUI.style.marginBottom = '15px';
  keyUI.style.marginRight = '10px';
  keyUI.style.textAlign = 'center';
  keyUI.title = 'reload map';
  controlDiv.appendChild(keyUI);
  
  // Set CSS for the control border.


  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '14px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = text;
  keyUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  keyUI.addEventListener('click', function() {
    
    arrayOfPoly.forEach(function(element) {
    location.reload();
    });
    
  });

}

function randomColour(randomnumber){
      var colour;
    switch(randomnumber){
      case 1:
      colour = "#F3BEBA";
        break;
      case 2:
      colour = "#EA8E86";
        break;
      case 3:
      colour = "#E05E52";
        break;
      case 4:
      colour = "#DA3D2F";
        break;
      case 5:
      colour = "#BF2F22";
        break;
      case 6:
      colour = "#AD2B1F";
            break;
      case 7:
      colour = "#9C261C";
            break;
      case 8:
      colour = "#8B2218";
            break;
      case 9:
      colour = "#791E15";
            break;
      case 10:
      colour = "#57150F";
    }
    return colour;
}
 function setColour(col){
  return {
    strokeColor: 'yellow',
    strokeWeight: 1.5,
    fillColor: col,
    fillOpacity: 0.4
  }
 };

 function setColourCal(col){
  return {
    strokeColor: "#de8022",
    strokeWeight: 1.3,
    fillColor: col,
    fillOpacity: 0.8
  }
 };

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

