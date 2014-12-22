/**
 * Created by admin on 12/22/2014.
 */
angular
    .module('myApp')
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
    });