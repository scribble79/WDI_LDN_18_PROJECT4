angular
  .module('ChildrensCenters')
  .factory('Center', Center);

Center.$inject = ['$resource'];
function Center($resource) {
  console.log("Center");
  return $resource('/centers/:id', { id: '@_id' }, {
    update: { method: "PUT" },
 });
}