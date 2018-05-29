(function () {
  "use strict";

  angular.module(APP_NAME).directive('bvWaitDirective1', bvWaitDirective1);

  /**
   * 
   * @param {*}  
   */
  function bvWaitDirective1($q) {

    var directive = {
      restrict: "E",
      scope: {
        bvSource: "="
      },
      link: link,
      templateUrl: "common/directives/bvWaitDirective/bvWaitDirective1.directive.html"
    };

    return directive;
  }

  /**
   * 
   * @param {*} scope 
   * @param {*} elm 
   * @param {*} attrs 
   */
  function link(scope, elm, attrs) {

    /*
      One time watch way
    */
    var unwatch = scope.$watch('bvSource', function (bvSource) {
      if (angular.isDefined(bvSource)) {
        unwatch(); //Remove the watch
        init(); //initialize
      }
    });

    /**
     * 
     */
    function init() {
      scope.data = angular.copy(scope.bvSource);
    }
  }

}());