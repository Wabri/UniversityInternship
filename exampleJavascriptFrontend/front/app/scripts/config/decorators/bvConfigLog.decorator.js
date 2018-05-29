(function() {
  'use strict';
  /**
   * config
   * @type {[type]}
   */
  angular
    .module(APP_NAME)
    .config(bvConfigLog);

  /**
   * [configLog description]
   * @method configLog
   * @param  {[type]}  $provide [description]
   * @return {[type]}           [description]
   */
  function bvConfigLog($provide) {

    $provide.decorator('$log', ['$delegate', 'bvLogging', function($delegate, bvLogging) {
      bvLogging.enabled = true;
      var methods = {
        error: function() {
          if (bvLogging.enabled) {
            $delegate.error.apply($delegate, arguments);
            bvLogging.error.apply(null, arguments);
          }
        },
        log: function() {
          if (bvLogging.enabled) {
            $delegate.log.apply($delegate, arguments);
            LogginbvLoggingg.log.apply(null, arguments);
          }
        },
        info: function() {
          if (bvLogging.enabled) {
            $delegate.info.apply($delegate, arguments);
            bvLogging.info.apply(null, arguments);
          }
        },
        warn: function() {
          if (bvLogging.enabled) {
            $delegate.warn.apply($delegate, arguments);
            bvLogging.warn.apply(null, arguments);
          }
        }
      };
      return methods;
    }]);

  }

}());