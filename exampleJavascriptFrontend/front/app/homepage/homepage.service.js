(function () {
  'use strict';

  angular.module(APP_NAME)
    .service('HomePageService', HomePageService)

  /**
   * bvAlertService
   * @param {*}
   * @param {*}
   */
  function HomePageService($http, $timeout, $q, $translate, bvApiService, bvStoreFactory, bvHttpPromisesFactory, bvBusyService) {

    // methods
    var self = this;

    //metodi
    self.rest1 = rest1;

    /**
     *
     */
    function rest1() {

      var waitPromise = bvHttpPromisesFactory.defer('Prova rest1 in corso...');
      // la chiamata
      var url = bvApiService.getEndpoint() + 'dataById?id=12';
      $http
        .get(url)
        .then(function (res) {
          return waitPromise.resolve(res);
        }, function (err) {
          return waitPromise.reject(err);
        });

      return waitPromise;
    }

  }

})();
