angular
  .module('ChildrensCenters', ['ui.bootstrap', 'ngAnimate', 'simpleAngularTicker', 'ngResource', 'angular-jwt', 'ui.router'])
  .config(InterceptorConfig)
  .config(Router);

InterceptorConfig.$inject = ['$httpProvider'];
function InterceptorConfig($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor')
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html',
    controller: 'centersController as centers'
  })
  .state('info', {
    url: '/info',
    templateUrl: 'info.html'
  })
  .state('center', {
    url: '/center/:id',
    templateUrl: 'center.html',
    controller: 'centersController as centers'
  })
  .state('newEvent', {
    url: '/center/:id/newEvent',
    templateUrl: 'newEvent.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'login.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'register.html'
  });


  $urlRouterProvider.otherwise('/');
}