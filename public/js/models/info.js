angular
  .module('ChildrensCenters')
  .factory('Info', Info);

Info.$inject = ['$resource'];
function Info($resource) {
 return $resource('/infos/:id', { id: '@_id' }, {
    update: { method: "PUT" },
  });
}