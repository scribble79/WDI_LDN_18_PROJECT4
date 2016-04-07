angular
  .module('ChildrensCenters')
  .factory('Center', Center);

Center.$inject = ['$resource'];
function Center($resource) {
  return $resource('/centers/:id', { id: '@_id' }, {
    update: { method: "PUT" },
 });
}