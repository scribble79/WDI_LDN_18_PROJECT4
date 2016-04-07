angular
  .module('ChildrensCenters')
  .factory('Info', Info);

Info.$inject = ['$resource'];
function Info($resource) {
 return $resource('/info/:id', { id: '@_id' }, {
    get: { method: "GET"},
    update: { method: "PUT" }
  });
}