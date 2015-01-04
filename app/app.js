/**
 * Created by buggy on 12/17/14.
 */
(function () {
    angular
        .module('myApp', ['firebase','ngMessages','ngRoute'])
        .constant('url', 'https://buggy-d.firebaseio.com/products/')
        .run(["$rootScope", "$location", function($rootScope, $location) {
            $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
                // We can catch the error thrown when the $requireAuth promise is rejected
                // and redirect the user back to the home page
                if (error === "AUTH_REQUIRED") {
                    $location.path("/login");
                }
            });
        }])
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
                .when('/entry', {
                    templateUrl: 'app/views/entry.html',
                    controller: 'entryController as ec',
                    resolve: {
                        // controller will not be loaded until $requireAuth resolves
                        // Auth refers to our $firebaseAuth wrapper in the example above
                        "currentAuth": ["auth", function(auth) {
                            // $requireAuth returns a promise so the resolve waits for it to complete
                            // If the promise is rejected, it will throw a $stateChangeError (see above)
                            return auth.$requireAuth();
                        }]
                    }
                })
                .otherwise('/')
        }]);
}());