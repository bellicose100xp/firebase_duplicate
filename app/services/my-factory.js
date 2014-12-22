/**
 * Created by admin on 12/22/2014.
 */
angular
    .module('myApp')
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
    });