angular
  .module('ChildrensCenters')
  .factory('Event', Event);

Event.$inject = ['$resource'];
function Event($resource) {
 return $resource('/events/:id', { id: '@_id' }, {
   update: { method: "PUT" },
 });
}