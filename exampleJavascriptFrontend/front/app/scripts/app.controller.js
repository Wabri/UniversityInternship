(function () {
  "use strict";

  angular.module(APP_NAME).controller("AppCtrl", AppCtrl);

  /**
   * [MainCtrl description]
   * @method      MainCtrl
   * @param       {[type]} $scope     [description]
   * @param       {[type]} $state     [description]
   * @param       {[type]} $rootScope [description]
   * @constructor
   */
  function AppCtrl($scope, $state, $rootScope, $translate) {

    // VM
    var vm = this;

    // attesa direttiva
    vm.waitApi = {};
    vm.waitPromise = {};
    vm.languageApi = {
      changeLanguage: function (newLanguage) {
      }
    };

    var pageTitleTranslationId = 'PAGE_TITLE';
    var pageContentTranslationId = 'PAGE_CONTENT';

    // parte da qui
    init();

    /**
     * init della procedura
     * @method init
     * @return {[type]} [description]
     */
    function init() {
      // inizializzazione
      //var waitDirectives = bvPromisesFactory.instance();
      // promessa vera per attesa DIRETTIVA MOVIMENTI
      //vm.waitPromise = waitDirectives.setPromise();
      // le chiamate per attesa
      //waitDirectives.wait(function() {
      // attesa didattica
      //});
      $translate(pageTitleTranslationId, pageContentTranslationId)
        .then(function (translatedPageTitle, translatedPageContent) {
          $rootScope.pageTitle = translatedPageTitle;
          $rootScope.pageContent = translatedPageContent;
        });

      /**
       * $scope.locale
       */
      $scope.locale = $translate.use();

    }


    /**
     * EVENTS
     */
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      $scope.locale = data.language;
      $rootScope.pageTitle = $translate.instant(pageTitleTranslationId);
      $rootScope.pageContent = $translate.instant(pageContentTranslationId);
    });

    /**
     * Provides info about current route path
     */
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      $scope.currentPath = current.$$route.originalPath;
    });

  }
})();