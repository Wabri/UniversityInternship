(function () {
  'use strict';
  /**
   * config
   * @type {[type]}
   */
  angular
    .module(APP_NAME)
    .config(config);

  /**
   * [config description]
   * @method config
   * @param  {[type]} $provide [description]
   * @return {[type]}          [description]
   */
  function config($stateProvider) {

    // gli stati
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: "homepage/homepage.html",
        controller: "homepageCtrl",
        controllerAs: "vm",
        resolve: {},
        params: {}
      });
  }

}());