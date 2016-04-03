angular.module('ChildrensCenters')
  .controller('MapController', MapController)
  .directive('map', Gmap);

  function MapController() {
    this.mapCenter = { lat: 51.4802, lng: -0.0193 };
    this.mapMarkers =[{
    name: "Buckingham Palace",
    position: { lat: 51.501364, lng: -0.14189 }
  },{
    name: "Emirates Stadium",
    position: { lat: 51.5548918, lng: -0.1106267 }
  }]
}

function Gmap() {
  return {
    restrict: 'E',
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
        zoom: 10
      });

       if(scope.markers) {
        scope.markers.forEach(function(marker) {
          new google.maps.Marker({
            position: marker.position,
            map: map,
            animation: google.maps.Animation.BOUNCE
          });
        });
      }
    }
  }
}