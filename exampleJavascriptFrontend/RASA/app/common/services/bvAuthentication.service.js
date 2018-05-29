(function () {
  'use strict';

  angular.module(APP_NAME)
    .service('bvAuthenticationService', bvAuthenticationService);

  /**
   * AuthenticationService
   * @param $http
   * @param $rootScope
   * @param StorageService
   * @constructor
   */
  function bvAuthenticationService($http, $rootScope, $state, $cookies, bvStorageService) {

    var self = this;

    // interfacce
    this.setCredentials = setCredentials;
    this.getCredentials = getCredentials;
    this.clearCredentials = clearCredentials;
    this.getCurrentUser = getCurrentUser;
    this.isAuthenticated = isAuthenticated;
    this.checkAutentication = checkAutentication;
    this.login = login;

    /**
     *
     * @param username
     * @param password
     * @constructor
     */
    function setCredentials(username, authmethod) {

      // cryptata
      var authdata = Base64.encode(username);

      // prapara il globals
      $rootScope.globals = {
        currentUser: {
          username: username,
          authmethod: authmethod,
          authdata: authdata
        }
      };
      // si, loggato !!!
      $rootScope.userLogged = true;

      // salva in cookie
      bvStorageService.set("globals", JSON.stringify($rootScope.globals));

      // altri
      $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
    }

    /**
     * getCredentials
     * @returns {Object|Array|string|number|Object|Array|Date|string|number|{}|*|{currentUser: {username: *, authmethod: *, authdata: *}}}
     */
    function getCredentials() {
      return $rootScope.globals;
    }

    /**
     * getCurrentUser
     * @returns {*}
     */
    function getCurrentUser() {
      if ($rootScope.userLogged) {
        return $rootScope.globals.currentUser;
      } else {
        return false;
      }
    }

    /**
     * clearCredentials
     */
    function clearCredentials() {
      bvStorageService.remove("globals");
      $rootScope.userLogged = false;
      $rootScope.globals = {};
      $http.defaults.headers.common.Authorization = 'Basic';
    }

    /**
     * isAuthenticated
     * @returns {boolean}
     */
    function isAuthenticated() {
      return ($rootScope.userLogged !== null && $rootScope.userLogged !== undefined && $rootScope.userLogged !== false);
    }

    /**
     *
     * @constructor
     */
    function checkAutentication() {

      // default
      $rootScope.userLogged = false;

      // keep user logged in after page refresh
      $rootScope.globals = angular.fromJson(bvStorageService.get("globals")) || {};

      // se giò loggato...
      if ($rootScope.globals.currentUser)
        $rootScope.userLogged = true;

    }
    /**
     * 
     */
    function clearXSRF() {
      $cookies.remove($http.defaults.xsrfCookieName);
    }

    function login(e, toState, toParams, fromState, fromParams) {

      // bene, non sono loggato, è una pagina di bypass ???
      var byPassPages = false;
      if (toState.name === "loginpage") {
        byPassPages = true;
      }

      // non lo è, vai al login !!!
      if (!byPassPages) {
        e.preventDefault();
        $state.go("loginpage", null, {
          reload: true
        });
      }

    }
  }

  /**
   *
   * @returns {string}
   */
  function guid() {

    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();

  }

  // Base64 encoding service used by AuthenticationService
  var Base64 = {

    keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

    encode: function (input) {
      var output = "";
      var chr1, chr2, chr3 = "";
      var enc1, enc2, enc3, enc4 = "";
      var i = 0;

      do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output +
          this.keyStr.charAt(enc1) +
          this.keyStr.charAt(enc2) +
          this.keyStr.charAt(enc3) +
          this.keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
      } while (i < input.length);

      return output;
    },

    decode: function (input) {
      var output = "";
      var chr1, chr2, chr3 = "";
      var enc1, enc2, enc3, enc4 = "";
      var i = 0;

      // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
      var base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        window.alert("There were invalid base64 characters in the input text.\n" +
          "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
          "Expect errors in decoding.");
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      do {
        enc1 = this.keyStr.indexOf(input.charAt(i++));
        enc2 = this.keyStr.indexOf(input.charAt(i++));
        enc3 = this.keyStr.indexOf(input.charAt(i++));
        enc4 = this.keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

      } while (i < input.length);

      return output;
    }
  };
})();