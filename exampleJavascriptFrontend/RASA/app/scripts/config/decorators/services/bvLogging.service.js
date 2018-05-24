(function () {
  'use strict';
  /**
   * config
   * @type {[type]}
   */
  angular
    .module(APP_NAME)
    .service('bvLogging', bvLogging);

  /**
   * [LoggbvLogginging description]
   * @method      bvLogging
   * @param       {[type]} $injector [description]
   * @constructor
   */
  function bvLogging($injector, CUSTOMIZE) {

    var service = {
      error: function () {
        self.type = 'ERROR';
        log.apply(self, arguments);
      },
      warn: function () {
        self.type = 'WARN';
        log.apply(self, arguments);
      },
      info: function () {
        self.type = 'INFO';
        log.apply(self, arguments);
      },
      log: function () {
        self.type = 'LOG';
        log.apply(self, arguments);
      },
      enabled: false,
      logs: []
    };

    var log = function () {

      var args = [];
      var arg = null;
      if (typeof arguments === 'object') {
        for (var i = 0; i < arguments.length; i++) {
          arg = arguments[i];
          var exception = {};
          exception.message = (arg && arg.message) ? arg.message : arg;
          exception.stack = arg.stack;
          args.push(JSON.stringify(exception));
        }
      }

      var eventLogDateTime = moment(new Date()).format('DD-MM-YYYY HH:MM:SS');
      var logItem = {
        time: eventLogDateTime,
        message: args.join('\n'),
        type: type
      };

      // per adesso a video. poi ...
      if (CUSTOMIZE.LOG.HTTP.trapDevice === 'screen')
        console.log(' [' + logItem.type + ' - ' + logItem.time + '] ' + logItem.message.toString());
      else if (CUSTOMIZE.LOG.HTTP.trapDevice === 'file' && CUSTOMIZE.LOG.HTTP.trapDeviceFile)
        // TODO : scrittura file...

        service.logs.push(logItem);
    };

    return service;

  }

}());