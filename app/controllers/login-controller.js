/**
 * Created by admin on 12/29/2014.
 */
/**
 * Created by buggy on 11/26/14.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('loginController', function ($firebaseAuth, url, $location) {

            var lc = this;

            lc.authData = null;
            lc.errorMessage = null;
            lc.needsValidation = null;

            var ref = new Firebase(url);
            lc.authObj = $firebaseAuth(ref);

            lc.login = function ($isValid) {

                // this is so the previous error message disappears from the screen when user presses submit
                lc.errorMessage = null;
                lc.needsValidation = null;

                if ($isValid) {

                    lc.authObj
                        .$authWithPassword({
                            email: lc.email,
                            password: lc.password
                        })
                        .then(function (authData) {
                            lc.authData = authData;
                            console.log('logged in as:', authData.password.email);
                            $location.path("/");
                        })
                        .catch(function (error) {
                            lc.errorMessage = error.toString();
                            console.error("Authentication Failed:", error);
                        });
                }
                else {
                    // display invalid entry error
                    lc.needsValidation = true;
                }

            }

        });


}());