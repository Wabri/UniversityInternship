(function () {
  "use strict";

  angular.module(APP_NAME)
    .provider('$exceptionHandler', {
      $get: function (bvErrorLogService) {
        return (bvErrorLogService);
      }
    });

})();