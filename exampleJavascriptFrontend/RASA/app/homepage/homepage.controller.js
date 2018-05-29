(function () {
  'use strict';



  /**
   * homepageCtrl : controller home page
   * @type {[type]}
   */
  angular.module(APP_NAME)
    .controller('homepageCtrl', homepageCtrl);

  /**
   * [homepageCtrl description]
   * @method homepageCtrl
   * @param  {[type]}     EVENTS [description]
   * @return {[type]}            [description]
   */
  function homepageCtrl($scope, $rootScope, $q, $timeout, bvPromisesService, bvBusyService, bvAlertService, EVENTS, HomePageService, bvHttpPromisesFactory) {

    // bp
    var vm = this;

    // interfaccia
    vm.rest1 = rest1;

    // parte da qui
    init();

    function init() {
      // TODO
    }


    /**
     * rest : esempio chiamata HTTP
     */
    function rest1() {

      var defer = HomePageService.rest1();

      return defer.promise.then(
        function (ds) {
        },
        function (error) {
          defer.reject();
          bvAlertService.warn("Errore", "Errore chiamata REST1");
          throw ("Error rest1")
        });
    }
  }

}());
