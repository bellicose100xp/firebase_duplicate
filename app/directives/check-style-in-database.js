/**
 * Created by buggy on 1/4/15.
 */

/**
 * Created by admin on 12/22/2014.
 */
angular
    .module('myApp')
    .directive('checkStyleInDatabase', function (myFactory, $timeout) {
        return {
            require: 'ngModel',
            scope: {},
            link: function (scope, element, _, ngModel) {

                //element.on('blur', function () {
                //    var duplicate = myFactory.isDuplicate(ngModel.$viewValue);
                //    //console.log("duplicate variable: " + duplicate);
                //    ngModel.$setValidity('isDuplicateValue',!duplicate);
                //    //console.log(ngModel);
                //});

                // for ngModel $viewChangeListeners can be used instead of $watch by pushing a function
                //scope.$watch('model', function () {
                //    console.log("change detected");
                    element.on('blur', function () {
                        console.log("View Value: " + ngModel.$viewValue);
                        if (ngModel.$viewValue) {
                            console.log("testing the value: " + ngModel.$viewValue);
                            var present = myFactory.isDuplicate(ngModel.$viewValue);
                            console.log("present value: " + present);
                            ngModel.$setValidity('notPresentInDatabase', present);

                            //change validity after certain time to hide the validity message
                            $timeout(function () {
                                ngModel.$setValidity('notPresentInDatabase', true);
                            }, 3000);
                        }
                    });

                //});


            }
        }
    });