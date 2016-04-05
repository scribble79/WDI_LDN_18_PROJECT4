angular.module('ChildrensCenters')
.directive('map', Gmap);

function Gmap() {
  return {
    restrict: 'E, A',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      marker: '='
    },
    link: function($scope, $element, attr) {

      var map = new google.maps.Map($element[0], {
        zoom: 15
      });

      $scope.$watch('marker', function(marker) {

        if(marker) {
          map.setCenter(marker.position);

          var gMarker = new google.maps.Marker({
            position: marker.position,
            map: map
            // animation: google.maps.Animation.BOUNCE
          });

          var infowindow = new google.maps.InfoWindow({
            infowindow: '<div class="infowindowSize">',
            content: '<div class="info-window">' + marker.name + ", " + marker.address1 + ", " + marker.address2 + ", " + marker.address3 + '<br><a href="mailto:' + marker.contact + '" target="_top">Contact Us</a></div>'
          });

          gMarker.addListener('click', function() {
            infowindow.open(map, gMarker);
          });
        }
      }, true);
    }
  }
}