angular
    .module('ChildrensCenters')
    .controller("infosController", InfosController);

InfosController.$inject = ['Info', '$state', 'tokenService']
function InfosController(Info, $state, tokenService) {
  var self = this;

  this.selectedInfo = null;
  this.newInfo = null;

  this.selectInfo = function(info) {
    this.selectedInfo = info;
  }

  this.addInfo = function(info) {
    console.log(info);
    // this.newInfo.center = this.currentCenter._id;
    Info.save(this.newInfo, function(res){
      self.newInfo = null
      $state.go('info');
    });
  }

  this.saveInfo = function() {
    Info.update(this.selectedInfo, function() {
      self.selectedInfo = null
    });
  }

  this.deleteInfo = function() {
    var id = this.selectedInfo._id;
    Info.delete({ id: id }, function() {
      self.selectedInfo = null;
      var box = document.getElementById(id)
      box.parentNode.removeChild(box);
    });
  }

}