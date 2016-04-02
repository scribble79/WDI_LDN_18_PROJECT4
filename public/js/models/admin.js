angular
  .module('ChildrensCenters')
  .factory('Admin', Admin);

Admin.$inject = ['$resource'];
function Admin($resource) {
 return $resource('/admins/:id', { id: '@_id' }, {
   update: { method: "PUT" },
   login: { method: "POST", url: '/login' },
   register: { method: "POST", url: '/register' }
 });
}