(function () {
  'use strict';
  /**
   * config
   * @type {[type]}
   */
  angular
    .module(APP_NAME)
    .factory('bvErrorLogService', bvErrorLogService);

  /**
   * [bvErrorLogService description]
   * @method bvErrorLogService
   * @param  {[type]}        $log    [description]
   * @param  {[type]}        $window [description]
   * @return {[type]}                [description]
   */
  function bvErrorLogService($log, $window) {

    function log(exception) {

      $log.error.apply($log, arguments);

      try {
        /*
        var args = [];
        var arg = null;
        if (typeof arguments === 'object') {
          for (var i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            var exceptionItem = {};
            exceptionItem.message = arg.message;
            exceptionItem.stack = arg.stack;
            args.push(JSON.stringify(exception));
          }
        }
        */
        // Phone home and log the error to the server.

        /*$.ajax({
            type: "POST",
            url: "./javascript-errors",
            contentType: "application/json",
            data: angular.toJson({
                errorUrl: $window.location.href,
                errorMessage: errorMessage,
                stackTrace: stackTrace,
                cause: ( cause || "" )
            })
        });*/

      } catch (loggingError) {
        // For Developers - log the log-failure.
        $log.warn("Error logging failed");
        $log.log(loggingError);
      }
    }
    return (log);
  }

}());