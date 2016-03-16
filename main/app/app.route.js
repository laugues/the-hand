'use strict';

angular.module('terminator').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/config', {
                templateUrl: 'app/features/config/config.html',
                controller: 'ConfigController',
                controllerAs:'configController',
                title: 'Configuration'
            })
            .when('/playlist', {
                templateUrl: 'app/features/playlist/playlist.html',
                controller: 'PlayListController',
                controllerAs:'playListController',
                title: 'Play List'
            })
            .otherwise({
                redirectTo: '/config'
            });
    }]);