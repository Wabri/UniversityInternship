(function() {
  'use strict';

  angular.module(APP_NAME)
    .service('bvApiService', bvApiService);

  /**
   * [ApiFactory description]
   * @method      ApiFactory
   * @param       {[type]}   $window      [description]
   * @param       {[type]}   $http        [description]
   * @param       {[type]}   API_ENDPOINT [description]
   * @constructor
   */
  function bvApiService($window, $http, API_ENDPOINT) {

    // methods
    var self = this;

    // funzioni esposte
    self.getEndpoint = getEndpoint;
    self.init = init;

    // locals
    var _api = null;
    var endpoint = null;

    /**
     * [init description]
     * @method init
     * @return {[type]} [description]
     */
    function init() {
      // inits
      _api = API_ENDPOINT;
      endpoint = _api.port ? (_api.host + ':' + _api.port + _api.path) : (_api.host + _api.path);

      // activate for basic auth
      if (_api.needsAuth) {
        $http.defaults.headers.common.Authorization = 'Basic ' + $window.btoa(_api.username + ':' + _api.password);
      }

    }

    // public api
    function getEndpoint() {
      if (endpoint === null)
        throw "bvApiService : init method not invoked";

      return endpoint;
    }

  }

})();