/**
 * Created by buggy on 1/4/15.
 */

angular
    .module('myApp')
    .factory('auth', ['$firebaseAuth','url', function ($firebaseAuth, url) {

        var ref = new Firebase(url);
        return $firebaseAuth(ref);

    }]);