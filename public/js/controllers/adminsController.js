angular
  .module('ChildrensCenters')
  .controller("adminsController", AdminsController);

AdminsController.$inject = ['Admin', 'tokenService', '$state']
function AdminsController(Admin, tokenService, $state) {
  var self = this;

  self.all = [];
  self.currentAdmin = null;

  function handleLogin(res) {
    var token = res.token ? res.token : null;
    
    // Console.log our response from the API
    if(token) {
      self.currentAdmin = tokenService.getAdmin();
    }

    self.message = res.message;

    // go to center state
    $state.go('center');
  }

  self.login = function() {
    Admin.login(self.currentAdmin, handleLogin);
  }

  self.register = function() {
    Admin.register(self.currentAdmin, handleLogin);
  }

  self.logout = function() {
    tokenService.removeToken();
    self.all = [];
    self.currentAdmin = null;
    self.message = "";
  }

  self.isLoggedIn = function() {
    return !!tokenService.getToken();
  }


  return self;
}