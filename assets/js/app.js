var appParko = angular.module('appParko', ['ui.router', 'parko.controllers', 'parkoService']);

appParko.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
          url: '/home',
          //abstract: true,
          templateUrl: 'templates/Dashboard.html',
          controller: 'DashboardController'
      })
});