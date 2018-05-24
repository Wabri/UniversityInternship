(function () {
  'use strict';

  angular.module(APP_NAME)
    .service('bvBusyService', bvBusyService);

  /**
   * [CgBusyService description]
   * @method      bvBusyService
   * @param       {[type]}      $rootScope [description]
   * @param       {[type]}      $q         [description]
   * @param       {[type]}      $timeout   [description]
   * @constructor
   */
  function bvBusyService($rootScope, $q, bvAlertService) {

    // bp
    var self = this;

    // metodi esposti
    self.addPromise = addPromise;
    self.clear = clear;

    // variabili locali
    var promises = [];

    /**
     * [addPromise description]
     * @method addPromise
     * @param  {[type]}   promise [description]
     */
    function addPromise(promise, message) {

      // solo se è effettivamente una promise
      if (promise && angular.isFunction(promise.then)) {

        // add della promise
        promises.push(promise);

        // parto ???
        if (promises.length === 1)
          bvAlertService.waitStart(message);

        // attende la conclusione della promessa
        promises[promises.length - 1].then(function () {

          // screma le promesse ( quelle ite )
          reAssignPendingPromises();


        }, function (error) {

          // screma le promesse ( quelle ite )
          reAssignPendingPromises();

        })

      } else
        throw new Error(-1, "bvBusyService:addPromise -> parameter is not a valid promise !")
    }

    /**
     * clear : annulla l'attesa e resetta le promesse passate...
     */
    function clear() {
      promises = [];
      bvAlertService.waitEnd();
    }

    /************/
    /** INTERNE */
    /************/
    function reAssignPendingPromises() {

      promises = promises.filter(function (promise) {
        return promise.$$state.status === 0;
      });

      // finite ??? annullo l'attesa !!!
      if (promises.length === 0)
        bvAlertService.waitEnd();
    }
  }

})();