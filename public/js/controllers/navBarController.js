angular
    .module('ChildrensCenters')
    .controller("navBarController", navBarController);

navBarController.$inject = ['Center'];
function navBarController(Center) {
  var self = this;

  self.centers = Center.query();

  self.status = {
    isopen: false
  }

  self.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  self.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  self.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
}