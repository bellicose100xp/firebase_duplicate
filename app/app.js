/**
 * Created by buggy on 12/17/14.
 */
(function () {
    angular
        .module('myApp', ['firebase','ngMessages'])
        .constant('url', 'https://buggy-d.firebaseio.com/products/')
        .controller('myController', function ($scope, myFactory) {
            $scope.product = {};
            $scope.product.style = '';
            $scope.isDuplicate = "";

            //$scope.addStyle = function () {
            //    myFactory.addData($scope.product);
            //    $scope.product.style = '';
            //};

            $scope.allStyles = myFactory.getData();

            $scope.checkDuplicate = function () {
                for (var i = 0; i < $scope.allStyles.length; i++) {
                    console.log("comparing db: " +  $scope.allStyles[i].style + " to " + $scope.product.style);
                    if ($scope.allStyles[i].style == $scope.product.style) {
                        $scope.isDuplicate = "duplicate value, Style Not Added";
                        return;
                    }
                }
                $scope.isDuplicate = "New Style Added " + $scope.product.style;
                myFactory.addData($scope.product);
                $scope.product.style = '';
            }

        })
        .factory('myFactory', function ($firebase, url) {

            var ref = new Firebase(url);
            var sync = $firebase(ref);
            var data = sync.$asArray();

            return {

                addData: function (product) {
                    data.$add(product)
                        .then(function (ref) {
                            var id = ref.key();
                            console.log("added with key" + id);
                        });
                },

                getData: function () {
                    return data;
                },

                isDuplicate: function (style) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].style === style) {
                            console.log("duplicate value found");
                            return true;
                        }
                    }
                    console.log("unique value");
                    return false;
                }
            }
        })
            .directive('checkDuplicate', function (myFactory) {
            return {
                require: 'ngModel',
                link: function(scope, element, attrs, ngModel){

                    element.on('blur', function () {
                        var duplicate = myFactory.isDuplicate(ngModel.$viewValue);
                        //console.log("duplicate variable: " + duplicate);
                        ngModel.$setValidity('isDuplicateValue',!duplicate);
                        //console.log(ngModel);
                    });
                }
            }
        })

        }());