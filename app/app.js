/**
 * Created by buggy on 12/17/14.
 */
(function () {
    angular
        .module('myApp', ['firebase'])
        .constant('url', 'https://buggy-d.firebaseio.com/products/')
        .controller('myController', function ($scope, myFactory) {
            $scope.product = {};
            $scope.product.style = '';
            $scope.isDuplicate = "";

            $scope.addStyle = function () {
                myFactory.addData($scope.product);
                $scope.product.style = '';
            };

            $scope.allStyles = myFactory.getData();

            $scope.checkDuplicate = function () {
                console.log($scope.allStyles.length);
                for (var i = 0; i < $scope.allStyles.length; i++) {
                    console.log("comparing db: " +  $scope.allStyles[i].style + " to " + $scope.product.style);
                    if ($scope.allStyles[i].style == $scope.product.style) {
                        $scope.isDuplicate = "duplicate value";
                        return;
                    }
                }
                $scope.isDuplicate = "Not a Duplicate Value";
                return;
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

                isDuplicate: function (styleVal) {
                    for (product in data) {
                        if (product.style == styleVal) {
                            return true;
                        }
                    }
                    return false;

                }
            }
        })
            .directive('checkDuplicate', function (myFactory) {
            return {
                require: 'ngModel',
                link: function(scope, elem, attr, ngModel){

                    elem.bind('blur', function () {
                        var duplicate = myFactory.isDuplicate(ngModel.$viewValue);
                        ngModel.$setValidity('isDuplicateValue',!duplicate);
                    });
                }
            }
        })

        }());