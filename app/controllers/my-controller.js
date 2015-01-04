/**
 * Created by admin on 12/22/2014.
 */
angular
    .module('myApp')
    .controller('mainController', function ($scope, colors, myFactory) {
        $scope.product = {};
        $scope.product.style = '';

        $scope.categoryOptions = colors;

        $scope.allStyles = myFactory.getData();

    });