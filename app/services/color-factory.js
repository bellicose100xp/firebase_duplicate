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
            },
            {
                'Id': 7,
                'name': 'Blue',
                'color': 'blue',
                'retail': 299.99
            },
            {
                'Id': 8,
                'name': 'Brown',
                'color': '#A52A2A',
                'retail': 399.99
            },
            {
                'Id': 9,
                'name': 'Silver',
                'color': '#C0C0C0',
                'retail': 499.99
            },
            {
                'Id': 10,
                'name': 'Black',
                'color': 'black',
                'retail': 599.99
            },
            {
                'Id': 11,
                'name': 'White',
                'color': 'white',
                'retail': 699.99
            }
        ];

        return categoryOptions;
    });