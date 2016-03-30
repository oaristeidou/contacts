/**
 * Created by odyssefs on 23.03.16.
 */
angular.module('ContactsApp', ['ngRoute', 'ngResource', 'ngMessages', 'ContactFilters'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'views/list.html'
            })
            .when('/contact/new', {
                controller: 'NewController',
                templateUrl: 'views/new.html'
            })
            .when('/contact/:id', {
                controller: 'SingleController',
                templateUrl: 'views/single.html'
            })
            .otherwise({
                redirectTo: "/contacts"
            });
        $locationProvider.html5Mode(true);

    });
