(function () {
  'use strict';

  angular
    .module(APP_NAME)
    .factory('bvHttpInterceptor', bvHttpInterceptor);

  /**
   * 
   * @param {*}  
   * @param {*}  
   * @param {*}  
   * @param {*}  
   * @param {*} bvAlertService 
   */
  function bvHttpInterceptor($q, $timeout, $injector, $log, $rootScope, $translate, EVENTS, CUSTOMIZE) {

    var $state;
    $timeout(function () {
      $state = $injector.get('$state');
    });

    return {
      // The user's API for claiming responsiblity for requests
      specificallyHandled: function (specificallyHandledBlock) {
        specificallyHandleInProgress = true;
        try {
          return specificallyHandledBlock();
        } finally {
          specificallyHandleInProgress = false;
        }
      },
      request: function (config) {

        if (CUSTOMIZE.LOG.HTTP.trapRequest)
          $log.info(config);

        return config;
      },
      // optional method
      response: function (response) {

        if (CUSTOMIZE.LOG.HTTP.trapResponse)
          $log.info(response);

        // do something on success
        return response;
      },
      // Response interceptor for handling errors generically
      responseError: function (rejection) {

        var shouldHandle = (rejection && rejection.config && rejection.config.headers && rejection.config.headers[HEADER_NAME]);

        // prepara il messaggio
        var erroMessage = "An HTTP request error has occurred.\nHTTP config: " + rejection.config + ".\nStatus: " + rejection.status;

        // log vero e proprio
        if (shouldHandle && CUSTOMIZE.LOG.HTTP.trapError)
          $log.error(erroMessage);

        // manda a video
        if (shouldHandle && CUSTOMIZE.LOG.HTTP.showErrorToScreen)
          $rootScope.$broadcast(EVENTS.HTTP_ERROR, {
            title: 'Errore HTTP',
            message: erroMessage
          });

        // TEST specifici
        if (shouldHandle && rejection.status === -1) {
          // TODO
        } else if (shouldHandle && rejection.status === 500) {
          // TODO
        }

        if (shouldHandle)
          return $q.reject(rejection);
      }
    };
  }
}());