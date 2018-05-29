(function () {
  'use strict';

  angular
    .module(APP_NAME)
    .factory('bvHttpPromisesFactory', bvHttpPromisesFactory);

  /**
   * 
   * @param {*}  
   * @param {*} bvBusyService 
   */
  function bvHttpPromisesFactory($q, bvBusyService) {
    return {
      decorate: function (promise) {

        promise.success = function (callback) {
          promise.then(callback);

          return promise;
        };

        promise.error = function (callback) {
          promise.then(null, callback);

          return promise;
        };
      },
      defer: function (message) {

        var deferred = $q.defer();

        // attesa
        bvBusyService.addPromise(deferred.promise, message);

        // decora
        this.decorate(deferred.promise);

        return deferred;
      }
    };
  };

}());