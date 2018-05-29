(function () {
  "use strict";

  angular.module(APP_NAME).directive('bvWaitDirective3', bvWaitDirective3);

  /**
   * 
   * @param {*}  
   */
  function bvWaitDirective3($q) {

    // definizione
    var directive = {
      restrict: "E",
      scope: {
        bvApi: "=",
        bvIsReadyPromise: "="
      },
      controller: controller,
      templateUrl: "common/directives/bvWaitDirective/bvWaitDirective3.directive.html"
    };

    return directive;
  }

  /**
   * 
   * @param {*} scope 
   * @param {*} elm 
   * @param {*} attrs 
   */
  function controller($scope, $rootScope, $q, $timeout) {

    // trappa il watch
    /*
    var unwatch = $scope.$watch('bvIsReadyPromise', function (promise) {

      if (angular.isDefined(promise))
        if (angular.isObject(promise) || angular.isFunction(promise) && angular.isFunction(promise.then)) {
          unwatch(); //Remove the watch
          init(); //initialize
        } else {
          throw new Error(-1, promise + " is not a valid promise")
        }

    });
    */

    init();

    /**
     * 
     */
    function init() {

      // API
      setApi();

      // READY
      setIsReadyState();
    }

    /**
     * 
     */
    function setApi() {
      if ($scope.bvApi) {
        $scope.bvApi.setDataSource = setDataSource;
      }
    }

    function setIsReadyState() {
      $timeout(function () {
        $scope.bvIsReadyPromise.resolve()
      },2000);
    }

    //
    // API METHODS
    //
    function setDataSource(data) {
      if (angular.isDefined(data)) {
        $scope.data = angular.copy(data);
      }
    }

  }

}());