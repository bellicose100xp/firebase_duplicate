/**
 * Created by admin on 12/22/2014.
 */
angular
    .module('myApp')
    .controller('mainController', function ($scope, colors, myFactory, $location) {
        $scope.product = {};
        $scope.product.style = '';

        $scope.categoryOptions = colors;

        $scope.allStyles = myFactory.getData();

        $scope.enterData = function () {
            $location.path('/entry');
        };

    });