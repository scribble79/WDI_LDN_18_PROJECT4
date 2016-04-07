angular
    .module('ChildrensCenters')
    .controller("infosController", InfosController);

InfosController.$inject = ['Info', '$state', 'tokenService']
function InfosController(Info, $state, tokenService) {
  var self = this;

  Info.query(function(info) {
    self.content = info[0].content;
  })

  this.saveInfo = function() {
    var data = {
      content: this.content
    }
    Info.update({id: 0}, data, function(info) {
      console.log(info);
    })
  }


}