/****
 * PromisesService : ....
 *
 * History :
 *      vs 1.0 (af/mb) ( 16/06/2017 ) : prima stesura
 *      vs 1.1 (af/mb) ( 16/06/2017 ) : cambiato in NON sigleton
 */

(function () {
  'use strict';

  angular.module(APP_NAME)
    .service('bvPromisesService', bvPromisesService);

  /**
   *
   * @param $http
   * @param $q
   * @returns {{get: get}}
   * @constructor
   */
  function bvPromisesService($q, $timeout, bvAlertService) {

    /**
     * PromisesService
     * @constructor
     */
    function bvPromisesService(options) {

      // variabili
      this.options = angular.extend({}, {
        timeout: 10000,
        waitLoader: true
      }, options);

      // altri
      this.promisesDone = false;
      this.timeout = false;
      this.waitPromise = null;
      this.promises = [];

    };


    /**
     * setPromise
     */
    function setPromise(defer) {
      this.promises.push(defer);
    }

    /**
     * getPromise
     */
    function getPromise() {

      var instance = $q.defer();
      this.promises.push(instance);
      return instance;
    }

    /**
     * setWaitPromise
     * @returns {*}
     */
    function setWaitPromise() {
      this.waitPromise = $q.defer();
      return this.waitPromise;
    }

    function setWaitLoader() {
      this.options.waitLoader = true;
    }

    /**
     * wait
     * @param success
     * @param error
     * @param timeout
     */
    function wait(success, error, timeout) {

      // preparo self perchè this andrenne in conflitto con $timeout
      var self = this;
      var timeoutPromises = $timeout(function () {

        // ammazza comunque il timeout
        $timeout.cancel(timeoutPromises);

        if (self.options.waitLoader)
          bvAlertService.waitEnd();

        // se attesa, levala
        if (self.waitPromise)
          self.waitPromise.resolve();

        if (timeout)
          self.timeout = true;

        // le promesse non sono state 'RISOLTE' ed è veramnente TIMEOUT
        if (!self.promisesDone) {

          // ferma le promesse se ne ce sono ancora pendenti
          angular.forEach(self.promises, function (defer) {
            if (defer.promise && defer.promise.$$state && parseInt(defer.promise.$$state.status) == 0) {
              defer.reject();
            }
          })

          // azzero comunque
          self.promises = [];

          if (self.timeout)
            timeout();
          else
            throw new Error(-1, "Attenzione : Service bvPromisesService -> timeout")
        }
      }, this.options.timeout);

      // promesse NON soddisfatte
      this.promisesDone = false;

      // preparo self perchè this andrenne in conflitto con $q
      if (self.options.waitLoader)
        bvAlertService.waitStart();

      // commuta le promesse
      var self = this;
      var promises = [];
      angular.forEach(this.promises, function (defer) {
        promises.push(defer.promise);
      })

      // tratta tutte le promesse
      $q.all(promises).then(function () {

        // pronto
        self.promisesDone = true;

        // se attesa, levala
        if (self.waitPromise)
          self.waitPromise.resolve();

        if (self.options.waitLoader)
          bvAlertService.waitEnd();

        // il timeout si può arrestare
        $timeout.cancel(timeoutPromises);

        // chiama success
        success();

      }, function () {
        
        // se provengo da timeout, non alzare problema
        if (self.timeout)
          return true;
        
        if (error)
          error();
        else
          throw new Error("Attenzione : Service bvPromisesService -> error")
      });
    };

    // i metodi esposti
    bvPromisesService.prototype.getPromise = getPromise;
    bvPromisesService.prototype.setPromise = setPromise;
    bvPromisesService.prototype.setWaitPromise = setWaitPromise;
    bvPromisesService.prototype.setWaitLoader = setWaitLoader;
    bvPromisesService.prototype.wait = wait;

    return {
      instance: function (options) {
        return new bvPromisesService(options);
      }
    }
  }


})();