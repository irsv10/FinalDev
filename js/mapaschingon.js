var latitude, longitude, zoom;
latitude = 39.2449277;
longitude = -84.4421875;
zoomf =17;
var coordenadas = "("+latitude+","+longitude+")";
var values1 ="none";
var contenido ="hola";
var contenido1 ="hola";
var latlngStr = latitude+", "+longitude;

function ShowInputs()
 {
	var values = document.getElementById("slfilter").value;
	 if(values=="none"){
	 document.getElementById('BizUnits').setAttribute("hidden",true);
	 document.getElementById('LBizUnits').setAttribute("hidden",true);
	 document.getElementById('Bizlocations').setAttribute("hidden",true);
	 document.getElementById('LBizlocations').setAttribute("hidden",true);
	 document.getElementById('Gecountries').setAttribute("hidden",true);
	 document.getElementById('LGecountries').setAttribute("hidden",true);
	 }
	 else if (values=="Business"){
	 document.getElementById('BizUnits').removeAttribute("hidden",true);
	 document.getElementById('LBizUnits').removeAttribute("hidden",true);
	 document.getElementById('Bizlocations').setAttribute("hidden",true);
	 document.getElementById('LBizlocations').setAttribute("hidden",true);
	 document.getElementById('Gecountries').setAttribute("hidden",true);
	 document.getElementById('LGecountries').setAttribute("hidden",true);
	 }
	 else if (values=="US Locations"){
	 document.getElementById('BizUnits').setAttribute("hidden",true);
	 document.getElementById('LBizUnits').setAttribute("hidden",true);
	 document.getElementById('Bizlocations').removeAttribute("hidden",true);
	 document.getElementById('LBizlocations').removeAttribute("hidden",true);
	 document.getElementById('Gecountries').setAttribute("hidden",true);
	 document.getElementById('LGecountries').setAttribute("hidden",true);
	 }
	 else if(values=="Global Locations"){
	 document.getElementById('Gecountries').removeAttribute("hidden",true);
	 document.getElementById('LGecountries').removeAttribute("hidden",true);
	 document.getElementById('BizUnits').setAttribute("hidden",true);
	 document.getElementById('LBizUnits').setAttribute("hidden",true);
	 document.getElementById('Bizlocations').setAttribute("hidden",true);
	 document.getElementById('LBizlocations').setAttribute("hidden",true);
	 }
 }


function oneclick()
{
	values1 = document.getElementById("slfilter").value;
	
	if (values1=="Business"){
		var bizunit = document.getElementById("BizUnits").value;
		
		if (bizunit=="GE Aviation HQ"){
	
		//latitude = 40.714224;
		//longitude = -73.961452;
		
		
		//latitude = 39.246797;
		//longitude = -84.446353;
		
		latitude = 39.2449277;
		longitude = -84.4421875;
		zoomf=17;
		initialize();
		}
		else if (bizunit=="GE Digital HQ"){
		latitude = 37.7672999;
		longitude = -121.9581792;
		zoomf=17;
		initialize();
		}
		else if (bizunit=="GE HealthCare HQ"){
		latitude = 51.6677324;
		longitude = -0.5639134;
		zoomf=18;
		initialize();
		}
		else if (bizunit=="GE Power HQ"){
		latitude = 33.914071;
		longitude = -84.4577783;
		zoomf=17;
		initialize();
		}
		else if (bizunit=="GE Renewables HQ"){
		latitude = 42.8100725;
		longitude = -73.954464;
		zoomf=18;
		initialize();
		}
		else if (bizunit=="GE Energy HQ"){
		latitude = 33.9022906;
		longitude = -84.4585624;
		zoomf=18;
		initialize();
		}
		else if (bizunit=="GE Transporation HQ"){
		latitude = 41.880901;
		longitude = -87.6426924;
		zoomf=18;
		initialize();
		}
	}
	
	else if(values1=="US Locations"){
		var uslocation = document.getElementById("Bizlocations").value;
	if (uslocation=="GE Albany County, NY"){
		latitude = 42.8097893;
		longitude = -73.954314;
		zoomf=18;
		initialize();
		}
	else if (uslocation=="GE Alpharetta, GA"){ 
		latitude =34.0964855; 
		longitude = -84.2382356;
		zoomf=18; 
		initialize();
	}
	else if (uslocation=="GE Atlanta, GA"){
		latitude =33.902113;
		longitude = -84.4583556;
		zoomf=19; 
		initialize(); 
	}
	else if (uslocation=="GE Barrington, IL"){
		latitude =42.1639811;
		longitude = -88.1496058;
		zoomf=19; 
		initialize(); 
		}
	else if (uslocation=="GE Boston, MA"){
		latitude =42.3518531;
		longitude = -71.0482971; 
		zoomf=19; 
		initialize(); 
		}
	else if (uslocation=="GE Cary, NC"){
		latitude =35.8261401; 
		longitude = -78.7987719;
		zoomf=18;
		initialize();
		}
	else if (uslocation=="GE Charlottesville, VA"){
		latitude =38.1680575; 
		longitude = -78.4169682;
		zoomf=19;
		initialize();
		}
	else if (uslocation=="GE Chicago, IL"){ 
	latitude =41.8810222; 
	longitude = -87.6406009;
	zoomf=18; 
	initialize();
	}
	else if (uslocation=="GE Cincinnati, OH"){ 
	latitude =39.0976436; 
	longitude = -84.5130664; 
	zoomf=18; 
	initialize(); 
	}
	else if (uslocation=="GE Cleveland, OH"){
		latitude =41.5402226; 
		longitude = -81.5617394;
		zoomf=18; 
		initialize();
		}
	else if (uslocation=="GE Detroit, MI"){
		latitude =42.2429723;
		longitude = -83.435827;
		zoomf=16;
		initialize();
		}
	else if (uslocation=="GE Erie, PA"){ 
	latitude =42.1474357; 
	longitude = -80.0346574;
	zoomf=17;
	initialize(); 
	}
	else if (uslocation=="GE Fairfield, CT"){
		latitude =41.1459027;
		longitude = -73.4300329;
		zoomf=16;
		initialize();
		}
	else if (uslocation=="GE Foxboro, MA"){
		latitude =42.0460602;
		longitude = -71.2389604;
		zoomf=18; 
		initialize(); 
		}
	else if (uslocation=="GE Glen Allen, VA"){
		latitude =37.66589; 
		longitude = -77.5717705;
		zoomf=18;
		initialize();
		}
	else if (uslocation=="GE Grand Rapids, MI"){
		latitude =42.9035746;
		longitude = -85.5476457;
		zoomf=17; 
		initialize(); 
		}
	else if (uslocation=="GE Greenville, SC"){
		latitude =34.8325266;
		longitude = -82.2882842;
		zoomf=17; 
		initialize(); 
		}
	else if (uslocation=="GE Grove City, PA"){
		latitude =41.1694527; 
		longitude = -80.1075756; 
		zoomf=17; 
		initialize();
		}
	else if (uslocation=="GE Houston, TX"){
		latitude =29.8792704;
		longitude = -95.5717297;
		zoomf=16; 
		initialize();
		}
	else if (uslocation=="GE Lisle, IL"){ 
	latitude =41.8077258;
	longitude = -88.0700646;
	zoomf=17;
	initialize();
	}
	else if (uslocation=="GE Milwaukee, WI"){ 
	latitude =43.1661707; 
	longitude = -88.0136717;
	zoomf=16; 
	initialize();
	}
	else if (uslocation=="GE New Orleans, LA"){ 
	latitude =29.9439992;
	longitude = -90.047335;
	zoomf=16; 
	initialize(); 
	}
	else if (uslocation=="GE San Antonio, TX"){ 
	latitude =29.6460058; 
	longitude = -98.2172334; 
	zoomf=16; 
	initialize();
	}
	else if (uslocation=="GE San Ramon, CA"){
		latitude =37.7672375; 
		longitude = -121.9606018;
		zoomf=17;
		initialize();
		}
	else if (uslocation=="GE Schenectady, NY"){ 
	latitude =42.8101231; 
	longitude = -73.9540875; 
	zoomf=18; 
	initialize(); 
	}
	else if (uslocation=="GE Seattle, WA"){ 
	latitude =47.6586665; 
	longitude = -122.3871517; 
	zoomf=17; 
	initialize();
	}
	else if (uslocation=="GE South Lake Tahoe, NV"){ 
	latitude =36.2685315;
	longitude = -115.0570642; 
	zoomf=17; 
	initialize();
	}
	else if (uslocation=="GE Trevose, PA"){
		latitude =40.1309262; 
		longitude = -74.9879284; 
		zoomf=18; 
		initialize(); }
	else if (uslocation=="GE Waukesha, WI"){
		latitude =43.0311432;
		longitude = -88.1655535;
		zoomf=17;
		initialize();
		}
	else if (uslocation=="GE Wilmington, NC"){
		latitude =34.3235116; 
		longitude = -77.9294972;
		zoomf=16; 
		initialize(); }

	

	}
	
	else if(values1=="Global Locations"){
		var globallocation = document.getElementById("Gecountries").value;
		
		if (globallocation=="GE Algeria"){
		latitude = 36.7448002;
		longitude = 3.0238958;
		zoomf=17;
		initialize();
		}
		else if (globallocation=="GE Angola"){
			latitude =-12.2942407; 
			longitude = 15.1160157;
			zoomf=6; 
			initialize();
			}
		else if (globallocation=="GE Australia"){
			latitude =-27.3134736;
			longitude = 152.9794298;
			zoomf=16; 
			initialize();
			}
		else if (globallocation=="GE Austria"){ 
			latitude =48.0280223;
			longitude = 13.4927927; 
			zoomf=17; 
			initialize(); 
		}
		else if (globallocation=="GE Bahrain"){ 
			latitude =26.2078534; 
			longitude = 50.5395438; 
			zoomf=16; 
			initialize();
		}
		else if (globallocation=="GE Brazil"){ 
			latitude =-46.6986233; 
			longitude = -46.6986233; 
			zoomf=19; 
			initialize();
		}
		else if (globallocation=="GE Canada"){ 
			latitude =43.6037047; 
			longitude = -79.7619863; 
			zoomf=17; 
			initialize(); 
		}
		else if (globallocation=="GE China"){ 
			latitude =31.191926;
			longitude = 121.5825061;
			zoomf=17;
			initialize(); 
		}
		else if (globallocation=="GE Czech Republic"){ 
			latitude =50.1335727;
			longitude = 14.5205526; 
			zoomf=17; 
			initialize();
		}
		else if (globallocation=="GE France"){ 
			latitude =48.8890931; 
			longitude = 2.2457955; 
			zoomf=18; 
			initialize(); 
		}
		else if (globallocation=="GE Hungary"){ 
			latitude =47.5443469; 
			longitude = 19.0716358;
			zoomf=17; 
			initialize();
		}
		else if (globallocation=="GE India"){ 
			latitude =12.9905497; 
			longitude = 77.7279069;
			zoomf=19; 
			initialize();
		}
		else if (globallocation=="GE Indonesia"){
			latitude =-6.2174035;
			longitude = 106.8128687; 
			zoomf=19; 
			initialize();
			}
		else if (globallocation=="GE Italy"){ 
		latitude =45.5720481;
		longitude = 9.3370202;
		zoomf=18; 
		initialize(); 
		}
		else if (globallocation=="GE Japan"){ 
			latitude =35.6569846; 
			longitude = 139.3671085; 
			zoomf=18; 
			initialize();
		}
		else if (globallocation=="GE Kenya"){ 
			latitude =-1.2843493;
			longitude = 36.8285313; 
			zoomf=19; 
			initialize();
		}
		else if (globallocation=="GE Korea"){
			latitude =37.5177328; 
			longitude = 127.0401325; 
			zoomf=18;
			initialize(); 
			}
		else if (globallocation=="GE Lebanon"){ 
			latitude =33.9357296; 
			longitude = 35.6035789;
			zoomf=10;
			initialize(); 
		}
		else if (globallocation=="GE Mexico"){
			latitude =25.6766986; 
			longitude = -100.4160225;
			zoomf=19; 
			initialize();
			}
		else if (globallocation=="GE Nigeria"){ 
			latitude =9.7167388; 
			longitude = 7.7636204; 
			zoomf=7; 
			initialize();
		}
		else if (globallocation=="GE Poland"){ 
			latitude =49.8388366;
			longitude = 18.979836; 
			zoomf=19;
			initialize();
		}
		else if (globallocation=="GE Qatar"){
			latitude =25.2635919; 
			longitude = 51.5362627;
			zoomf=19; 
			initialize();
			}
		else if (globallocation=="GE Russia"){
			latitude =55.7918631; 
			longitude = 37.7063248;
			zoomf=18; 
			initialize();
			}
		else if (globallocation=="GE Saudi Arabia"){
			latitude =26.2965515;
			longitude = 50.1603653;
			zoomf=19; 
			initialize();
			}
		else if (globallocation=="GE Singapore"){ 
		latitude =1.3834076; 
		longitude = 103.9742675; 
		zoomf=19;
		initialize();
		}
		else if (globallocation=="GE Switzerland"){
			latitude =47.4794184;
			longitude = 8.3046162;
			zoomf=19; 
			initialize();
			}
		else if (globallocation=="GE Turkey"){
			latitude =40.7929576; 
			longitude = 29.4671845; 
			zoomf=19; 
			initialize(); 
			}
		else if (globallocation=="GE United Kingdom"){
			latitude =50.9809624;
			longitude = -1.3907467;
			zoomf=19;
			initialize();
			}

		
	}

	else if(values1=="none"){	
		initAutocomplete();
	}
	
	
	}

function initAutocomplete() {
	var gehq ={lat: 42.3529909, lng: -71.0522142};
	var geaviationcin ={lat: 39.2448715, lng: -84.4452953};
	
	
	var map = new google.maps.Map(document.getElementById('map'), {
		  center: gehq,
          zoom: 16,
          mapTypeId: 'hybrid'
		  
        });

        // Create the search box and link it to the UI element.
		var input1 = document.getElementById("BizUnits").value;
		var ge = "GE ";
        var input = document.getElementById('pac-input');
		
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
		var searchBox = new google.maps.places.SearchBox(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        
		});

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
	  
function initialize() {
  var pyrmont = new google.maps.LatLng(latitude,longitude);
    latlngStr = latitude+", "+longitude;
  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: zoomf,
	  mapTypeId: 'hybrid'
    });

	
  var request = {
    location: pyrmont,
  };
	var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
	
  marker = new google.maps.Marker({
          map: map,
          draggable: true,
		  icon: image,
		  title: 'GE Location',
          animation: google.maps.Animation.DROP,
          position: {lat: latitude, lng: longitude}
        });
	
	if (values1=="Business"){
		var bizunit = document.getElementById("BizUnits").value;
		var contentString = bizunit;
	}
	
	else if(values1=="US Locations"){
		var uslocation = document.getElementById("Bizlocations").value;
		var contentString = uslocation;
	}
	else if(values1=="Global Locations"){
		var globallocation = document.getElementById("Gecountries").value;
		var contentString = globallocation;
	}
	
	var geocoder = new google.maps.Geocoder;
	
	
	var infowindow = new google.maps.InfoWindow;
	//({
         // content: contenido
        //});
		
	marker.addListener('click',function(){
	  geocodeLatLng(geocoder, map,infowindow);
	  toggleBounce();
	  infowindow.open(map, marker);
  });
  
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  
 
}
 function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

	  function geocodeLatLng(geocoder,map,infowindow) {
        
		
		var Latlng2 = latlngStr.split(',',2);
		var latlng10 = {lat: parseFloat(Latlng2[0]), lng: parseFloat(Latlng2[1])};
		
        geocoder.geocode({'location': latlng10}, function(results, status) {
			
          if (status === 'OK') {
			  infowindow.setContent(results[1].formatted_address);
			  //contenido=results[1].formatted_address;
			 
            } 
		}
        );
      }