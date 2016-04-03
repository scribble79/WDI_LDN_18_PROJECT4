angular
    .module('ChildrensCenters')
    .controller("centersController", CentersController);

CentersController.$inject = ['Center']
function CentersController() {
  console.log("Loaded")
  var self = this;


}