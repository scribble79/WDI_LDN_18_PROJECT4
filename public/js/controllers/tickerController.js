angular
  .module('ChildrensCenters')
  .controller("tickerController", tickerController);

function tickerController() {
  console.log("Loaded")
  var self = this;
  
  this.myTickerItems = [{
   title: 'item 1',
   copy: 'hello world'
  },
  {
   title: 'item 2',
   copy: 'wow, this is great'
  },
  {
   title: 'item 3',
   copy: 'hello angular'
  },
  {
   title: 'item 4',
   copy: 'new news'
  },
  {
   title: 'item 5',
   copy: 'schools'
  },
  {
   title: 'item 6',
   copy: 'Childrens Centers'
  }];
}