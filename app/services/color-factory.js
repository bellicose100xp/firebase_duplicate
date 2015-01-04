/**
 * Created by buggy on 1/4/15.
 */

angular
    .module('myApp')
    .factory('colors', function () {

        var categoryOptions = [
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

        return categoryOptions;
    });