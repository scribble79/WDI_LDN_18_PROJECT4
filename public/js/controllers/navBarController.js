angular
    .module('ChildrensCenters')
    .controller("navBarController", navBarController);

navBarController.$inject = ["Center"];
function navBarController(Center) {
  console.log("Loaded")
  var self = this;

  self.centers = Center.query();
  console.log(self.centers);
  self.items = [{
    name: 'Home',
  },{
    name: 'Information For Families',
  },{
    name: 'Kintore Way',
    url: "http://www.kintoreway.com/page_viewer.asp?page=Home&pid=1"
  },{
    name: 'Pilgrims Way',
    url: "http://www.pilgrimswayprimary.co.uk/"
  },{
    name: 'South Bermondsey',
    url: "http://www.pilgrimswayprimary.co.uk/ccsb/"
  },{
    name: 'Rotherhite',
    url: "http://rotherhitheprimary.co.uk/childrens-centre/"
  }
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