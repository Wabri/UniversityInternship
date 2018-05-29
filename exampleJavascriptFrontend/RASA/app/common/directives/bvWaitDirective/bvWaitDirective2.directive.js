(function () {
  "use strict";

  angular.module(APP_NAME).directive('bvWaitDirective2', bvWaitDirective2);

  /**
   * 
   * @param {*}  
   */
  function bvWaitDirective2($q) {

    // definizione
    var directive = {
      restrict: "E",
      scope: {
        bvSource: "="
      },
      controller: controller,
      templateUrl: "common/directives/bvWaitDirective/bvWaitDirective2.directive.html"
    };

    return directive;
  }

  /**
   * 
   * @param {*} scope 
   * @param {*} elm 
   * @param {*} attrs 
   */
  function controller($scope, $q) {

    /*
     Promise way
    */
    //Set up data or promise, q.when will make sure it is always a promise, be careful about not setting values like null etc..

    $q.when($scope.bvSource).then(init);

    function init() {
      $scope.data = angular.copy($scope.bvSource.$$state.value);
    }

  }

}());