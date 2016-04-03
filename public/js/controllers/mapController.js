angular.module('ChildrensCenters')
.controller('MapController', MapController)
.directive('map', Gmap);

function MapController() {
  this.mapCenter = { lat: 51.480484, lng: -0.055939 };
  this.mapMarkers =[{
    name: "Pilgrim's Way Primary School",
    position: { lat: 51.480484, lng: -0.055939 },
  }]
  this.mapInfoWindow = { content: "Pilgrim's Way Primary School, London Borough of Southwark, Tustin Estate Manor Grove, SE15 1EF" }
}

function Gmap() {
  return {
    restrict: 'E, A',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '=',
      markers: '=',
      infoWindow: '='
    },
    link: function(scope, $element, attr) {

      if(!scope.center) throw new Error("You must provide a center for your map directive");
      var map = new google.maps.Map($element[0], {
        center: scope.center,
        zoom: 15
      });

      if(scope.markers) {
        scope.markers.forEach(function(marker) {
          new google.maps.Marker({
            position: marker.position,
            map: map
            // animation: google.maps.Animation.BOUNCE
          });
        });

        if(scope.infoWindow) {
         scope.infoWindow.forEach(function(infoWindow) {
           new google.maps.InfoWindow({
             position: position,
             content: content
           });
              marker.addListener('click', function() {
              infowindow.open(map, marker);
             });
         });
       }
     }
   }
 }
}