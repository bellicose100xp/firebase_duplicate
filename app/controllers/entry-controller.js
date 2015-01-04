/**
 * Created by buggy on 1/4/15.
 */
/**
 * Created by admin on 12/22/2014.
 */
angular
    .module('myApp')
    .controller('entryController', function ($scope, auth, currentAuth, colors, myFactory) {
        $scope.product = {};
        $scope.product.style = '';

        $scope.auth = auth;

        $scope.user = currentAuth.password.email;

        $scope.categoryOptions = colors;

        $scope.addStyle = function (isValid) {

            if (isValid) {

                myFactory.addData($scope.product);

                $scope.product.style = '';
                $scope.product.category = {};

                $scope.productForm.$setUntouched();
                $scope.productForm.$setPristine();

            }
            else {
                console.log("product not added");
            }

        };

        $scope.allStyles = myFactory.getData();

    });