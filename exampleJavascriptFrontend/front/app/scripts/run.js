(function () {
  "use strict";
  /**
   * config
   * @type {[type]}
   */
  angular.module(APP_NAME).run(run);

  /**
   * [run description]
   * @method run
   * @return {[type]} [description]
   */
  function run(
    $rootScope,
    $translate,
    $state,
    bvBreakpointsService,
    bvApiService,
    bvAlertService,
    bvAuthenticationService,
    EVENTS
  ) {
    // per attesa ( grafica )
    $rootScope.wait = null;

    // per autenticazione
    $rootScope.$on("$stateChangeStart", function (
      e,
      toState,
      toParams,
      fromState,
      fromParams
    ) {
    });

    // On state change, scroll to top
    $rootScope.$on("$stateChangeSuccess", function (
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {});
    // stateChangeError
    $rootScope.$on("$stateChangeError", function (
      event,
      toState,
      toParams,
      fromState,
      fromParams,
      error
    ) {
      //event.preventDefault();
      //return $state.go('login.app');
    });
    $rootScope.$on(EVENTS.HTTP_ERROR, function (event, eventData) {
      //bvAlertService.warn(eventData.title, eventData.message);
    });

    // Define Breakpoints
    bvBreakpointsService.init();
    bvBreakpointsService.add("xs", 0);
    bvBreakpointsService.add("sm", 599);
    bvBreakpointsService.add("md", 1279);
    bvBreakpointsService.add("lg", 1919);
    bvBreakpointsService.add("xl", 1920);
    bvBreakpointsService.doResize();

    // init service api
    bvApiService.init();

  }
})();