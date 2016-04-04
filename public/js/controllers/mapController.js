angular.module('ChildrensCenters')
.controller('MapController', MapController)
.directive('map', Gmap);

function MapController() {
  this.mapCenter = { lat: 51.480484, lng: -0.055939 };
  this.mapMarkers =[{
    name: "Pilgrim's Way Primary School",
    address1: "London Borough of Southwark",
    address2: "Tustin Estate Manor Grove",
    address3: "SE15 1EF",
    contact: "Contact",
    position: { lat: 51.480484, lng: -0.055939 },
  }];

}

function Gmap() {
  return {
    restrict: 'E, A',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '=',
      markers: '='
    },
    link: function(scope, $element, attr) {

      if(!scope.center) throw new Error("You must provide a center for your map directive");
      var map = new google.maps.Map($element[0], {
        center: scope.center,
        zoom: 15
      });

      if(scope.markers) {
        scope.markers.forEach(function(marker) {
          var gMarker = new google.maps.Marker({
            position: marker.position,
            map: map
            // animation: google.maps.Animation.BOUNCE
          });

          var infowindow = new google.maps.InfoWindow({
            infowindow: '<div class="infowindowSize">',
            content: '<div class="info-window">' + marker.name + ", " + marker.address1 + ", " + marker.address2 + ", " + marker.address3 + '<br>' + marker.contact + '</div>'
          });

          gMarker.addListener('click', function() {
            infowindow.open(map, gMarker);
          });
        });
      }
    }
  }
}