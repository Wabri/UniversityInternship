(function () {
  "use strict";

  angular.module(APP_NAME).directive("bvLanguageSelect", bvLanguageSelect);

  /**
   * bvWait : direttiva di attesa
   */
  function bvLanguageSelect() {

    var directive = {
      restrict: 'AE',
      controller: controller,
      controllerAs: 'ctrl',
      bindToController: true,
      priority: 500,
      templateUrl: "common/directives/bvLanguageSelect/bvLanguageSelect.directive.html",
      scope: {
        bvApi: '='
      }
    };

    return directive;
  }

  /**
   * controller : il controller
   * @param {*} LocaleService 
   */
  function controller($scope, bvLocaleService) {

    // BP
    var vm = this;

    preInit();
    init();
    postInit();

    /**
     * preInit
     */
    function preInit() {

    }

    /**
     * init
     */
    function init() {

      vm.currentLocaleDisplayName = bvLocaleService.getLocaleDisplayName();
      vm.localesDisplayNames = bvLocaleService.getLocalesDisplayNames();
      vm.visible = vm.localesDisplayNames &&
        vm.localesDisplayNames.length > 1;

      /**
       * 
       * @param {*} locale 
       */
      vm.changeLanguage = function (locale) {

        // setta
        bvLocaleService.setLocaleByDisplayName(locale);

        // se possibile, chiama la funzione eposta dal parente
        if (vm.bvApi && vm.bvApi.changeLanguage) {
          vm.bvApi.changeLanguage(locale);
        }
      };
    }

    /**
     * postInit
     */
    function postInit() {

      // init api
      if (vm.bvApi) {
        vm.bvApi.isReady = function () {
          return true;
        };
      }

      // init primises
      if (vm.bvPromiseReady) {
        vm.bvPromiseReady.resolve();
      }
    }
  }

})();