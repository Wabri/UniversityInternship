/****
 * PromisesFactory : ....
 *
 * History :
 *      vs 1.0 (af/mb) ( 16/06/2017 ) : prima stesura
 *      vs 1.1 (af/mb) ( 16/06/2017 ) : cambiato in NON sigleton
 */

(function() {
    'use strict';

    angular
        .module(APP_NAME)
        .factory('bvPromisesFactory', bvPromisesFactory);

    /**
     * bvPromisesFactory
     * 
     * @param $http
     * @param $q
     * @returns {{get: get}}
     * @constructor
     */
    function bvPromisesFactory($q, $timeout) {

        var self = this;

        /**
         * PromisesFactory
         * @constructor
         */
        function bvPromisesFactory(options) {

            // variabili
            self.options = angular.extend({}, {
                timeout: 5000
            }, options);
            self.promisesDone = false;
            self.waitPromise = null;
            self.promises = [];
        }

        /**
         * setPromise
         */
        function setPromise() {

            var instance = $q.defer();
            self.promises.push(instance.promise);
            return instance;
        }

        /**
         * setWaitPromise
         * @returns {*}
         */
        function setWaitPromise() {
            self.waitPromise = $q.defer();
            return self.waitPromise;
        }

        /**
         * wait
         * @param success
         * @param error
         * @param timeout
         */
        function wait(success, error, timeout) {

            // preparo self perchè this andrenne in conflitto con $timeout

            var timeoutPromises = $timeout(function() {

                // se attesa, levala
                if (self.waitPromise)
                    self.waitPromise.resolve();

                // le promesse non sono state 'RISOLTE' ed è veramnente TIMEOUT
                if (!self.promisesDone) {

                    // azzero comunque
                    self.promises = [];

                    if (timeout)
                        timeout();
                    else
                        alert("Attenzione : Service PromisesFactory -> timeout");

                } else
                    $timeout.cancel(timeoutPromises);

            }, self.options.timeout);

            // promesse NON soddisfatte
            self.promisesDone = false;

            // preparo self perchè this andrenne in conflitto con $q

            $q.all(self.promises).then(function() {

                // pronto
                self.promisesDone = true;

                // se attesa, levala
                if (self.waitPromise)
                    self.waitPromise.resolve();

                // il timeout si può arrestare
                $timeout.cancel(timeoutPromises);

                // chiama success
                success();

            }, function() {

                if (error)
                    error();
                else
                    alert("Attenzione : Service PromisesFactory -> errore grave");
            });
        }

        // i metodi esposti
        bvPromisesFactory.prototype.setPromise = setPromise;
        bvPromisesFactory.prototype.setWaitPromise = setWaitPromise;
        bvPromisesFactory.prototype.wait = wait;

        return {
            instance: function(options) {
                return new bvPromisesFactory(options);
            }
        };
    }

})();