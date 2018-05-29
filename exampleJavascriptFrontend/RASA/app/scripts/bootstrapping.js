(function () {
  "use strict";

  /**
   * modulo Bootstrapping ( manuale )
   * @method
   * @return {[type]} [description]
   */
  angular.element(document).ready(function () {

    // EVENTUALE TRAP EVENTI
    /*
    $(window).bind("pageshow", function (event) {
      console.log("event pageshow fired");
    });
    $(window).bind("resize", function (event) {
      console.log("event resize fired");
    });
    */

    // BOOTSTRAP MANUALE
    var $injector = angular.bootstrap(document, [APP_NAME]);

    // EVENTUALMENTE PER CHIAMARE UNA FUNZIONE DI UN CONTROLLER
    //var $controller = $injector.get('$controller');
    //var AngularCtrl = $injector.get('$controller')('LayoutCtrl', {
    //  $scope: {}
    //});

    // invoka la func
    //AngularCtrl.test();

  })

})();