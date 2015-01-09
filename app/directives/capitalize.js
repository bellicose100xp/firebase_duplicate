/**
 * Created by admin on 12/22/2014.
 */
angular
    .module('myApp')
    .directive('capitalize', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                var capitalize = function (inputValue) {
                    if (inputValue == undefined) inputValue = '';
                    var capitalized = inputValue.toUpperCase();
                    if (capitalized !== inputValue) {
                        ngModel.$setViewValue(capitalized);
                        ngModel.$render();
                    }
                    return capitalized;
                };
                ngModel.$parsers.push(capitalize);
                capitalize(scope[attrs.ngModel]);  // capitalize initial value
            }
        };
    });