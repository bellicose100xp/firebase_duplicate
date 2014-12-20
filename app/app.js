/**
 * Created by buggy on 12/17/14.
 */
(function () {
    angular
        .module('myApp', ['firebase', 'ngMessages'])
        .constant('url', 'https://buggy-d.firebaseio.com/products/')
        .controller('myController', function ($scope, myFactory) {
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
                            //console.log("duplicate value found");
                            return true;
                        }
                    }
                    //console.log("unique value");
                    return false;
                }
            }
        })
        .directive('checkDuplicate', function (myFactory) {
            return {
                require: 'ngModel',
                scope: {},
                link: function (scope, element, attrs, ngModel) {

                    //element.on('blur', function () {
                    //    var duplicate = myFactory.isDuplicate(ngModel.$viewValue);
                    //    //console.log("duplicate variable: " + duplicate);
                    //    ngModel.$setValidity('isDuplicateValue',!duplicate);
                    //    //console.log(ngModel);
                    //});

                    // for ngModel $viewChangeListeners can be used instead of $watch by pushing a function
                    ngModel.$viewChangeListeners.push(function () {
                            var duplicate = myFactory.isDuplicate(ngModel.$viewValue);
                            ngModel.$setValidity('isDuplicateValue', !duplicate);
                            //console.log("duplicate variable: " + duplicate);
                            //console.log(ngModel);
                        }
                    );

                }
            }
        })
        .directive('capitalize', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, modelCtrl) {
                    var capitalize = function (inputValue) {
                        if (inputValue == undefined) inputValue = '';
                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            modelCtrl.$setViewValue(capitalized);
                            modelCtrl.$render();
                        }
                        return capitalized;
                    };
                    modelCtrl.$parsers.push(capitalize);
                    capitalize(scope[attrs.ngModel]);  // capitalize initial value
                }
            };
        });

}());