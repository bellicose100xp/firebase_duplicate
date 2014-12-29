/**
 * Created by buggy on 12/17/14.
 */
(function () {
    angular
        .module('myApp', ['firebase','ngMessages','ngRoute'])
        .constant('url', 'https://buggy-d.firebaseio.com/products/')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/',{
                    templateUrl: 'app/views/home.html',
                    controller: 'mainController as mc'
                })
                .when('/login', {
                    templateUrl:'app/views/login.html',
                    controller:'loginController as lc'
                })
                .otherwise('/')
        }]);
}());