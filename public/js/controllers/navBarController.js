angular
    .module('ChildrensCenters')
    .controller("navBarController", navBarController);


function navBarController() {
  console.log("Loaded")
  var self = this;

  self.items = [
    'Home',
    'Information For Families',
    'Kintore Way',
    'Pilgrims Way',
    'South Bermondsey',
    'Rotherhite'
  ]

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