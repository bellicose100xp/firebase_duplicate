/**
 * Created by admin on 12/22/2014.
 */
angular
    .module('myApp')
    .controller('mainController', function ($scope, myFactory) {
        $scope.product = {};
        $scope.product.style = '';
        //$scope.isDuplicate = "";

        // options for category
        $scope.categoryOptions = [
            {
                'Id': 1,
                'name': 'Orange',
                'color': 'orange',
                'retail': 66.66
            }
            , {
                'Id': 2,
                'name': 'Green',
                'color': 'green',
                'retail': 99.99
            },
            {
                'Id': 3,
                'name': 'Red',
                'color': 'red',
                'retail': 133.33
            },
            {
                'Id': 4,
                'name': 'Purple',
                'color': 'purple',
                'retail': 166.66
            },
            {
                'Id': 5,
                'name': 'Gold',
                'color': 'gold',
                'retail': 199.99
            },
            {
                'Id': 6,
                'name': 'Yellow',
                'color': '#ffff00',
                'retail': 249.99
            }
        ];

        $scope.addStyle = function (isValid) {

            if (isValid) {
                myFactory.addData($scope.product);
                $scope.product.style = '';
                $scope.product.category = {};
                //console.log('Product added');
                $scope.productForm.$setUntouched();
                $scope.productForm.$setPristine();
            }
            else {
                console.log("product not added");
            }

        };

        $scope.allStyles = myFactory.getData();

        //$scope.checkDuplicate = function () {
        //    for (var i = 0; i < $scope.allStyles.length; i++) {
        //        console.log("comparing db: " +  $scope.allStyles[i].style + " to " + $scope.product.style);
        //        if ($scope.allStyles[i].style == $scope.product.style) {
        //            $scope.isDuplicate = "duplicate value, Style Not Added";
        //            return;
        //        }
        //    }
        //    $scope.isDuplicate = "New Style Added " + $scope.product.style;
        //    myFactory.addData($scope.product);
        //    $scope.product.style = '';
        //}

    });