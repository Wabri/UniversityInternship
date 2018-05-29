(function () {
  'use strict';

  angular
    .module(APP_NAME)
    .service('bvStorageService', bvStorageService);

  /* @ngInject */
  function bvStorageService($cookies, $window) {

    var self = this;

    // i metodi del servizio
    self.sessionStorageServiceEnabled = sessionStorageServiceEnabled;
    self.localStorageServiceCookieEnabled = localStorageServiceCookieEnabled;

    self.set = set;
    self.get = get;
    self.remove = remove;
    self.clearAll = clearAll;

    self.setStorage = setStorage;
    self.getStorage = getStorage;
    self.removeStorage = removeStorage;
    self.clearAllStorage = clearAllStorage;

    self.setMemoryStorage = setMemoryStorage;
    self.getMemoryStorage = getMemoryStorage;
    self.removeMemoryStorage = removeMemoryStorage;
    self.clearAllMemoryStorage = clearAllMemoryStorage;

    self.setCookie = setCookie;
    self.getCookie = getCookie;
    self.removeCookie = removeCookie;
    self.clearAllCookie = clearAllCookie;

    /**
     * check
     * @returns {boolean}
     */
    function sessionStorageServiceEnabled() {

      var sessionStorageResult;
      try {
        $window.sessionStorage.setItem("sessionStorageTest", "Test!");
        $window.sessionStorage.removeItem("sessionStorageTest");
        sessionStorageResult = true;
      } catch (e) {
        sessionStorageResult = false;
      }

      //return false;
      return sessionStorageResult;

    }

    /**
     * localStorageServiceCookieEnabled
     * @param storeName
     */
    function localStorageServiceCookieEnabled(storeName) {

      // tenda la scrittura del cooke
      document.cookie = "cookietest=1";

      var ret = document.cookie.indexOf("cookietest=") !== -1;

      // Delete cookie
      document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";

      return ret;
    }

    // Get cookie value by passing the key.
    function GetCookieValue(strKey) {

      // split cookies by '; ', keep space as it is.
      var arrCookies = document.cookie.split('; ');

      for (var i = 0; i < arrCookies.length; i++) {

        var keyValuePair = GetKeyValuePair(arrCookies[i]);

        // Match the key.
        if (keyValuePair.key === strKey) {
          // return value of matched key.
          return keyValuePair.value;
        }
      }

      // Return an empty string if key is not present.
      return "";
    }

    // Get key value pair from the cookie string.
    function GetKeyValuePair(strCookie) {

      // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
      var separatorIndex = strCookie.indexOf('=');

      // IE omits the "=" when the cookie value is an empty string
      separatorIndex = separatorIndex < 0 ? strCookie.length : separatorIndex;

      var key = strCookie.substr(0, separatorIndex);
      var decodedKey;

      try {
        decodedKey = decodeURIComponent(key);
      } catch (e) {}

      return {
        key: decodedKey,
        value: strCookie.substr(separatorIndex + 1)
      };
    };

    /* GENERICHE */

    /**
     * get
     */
    function get(name) {

      if (self.sessionStorageServiceEnabled())
        return self.getStorage(name);

      else {
        return self.getMemoryStorage(name);
        //return self.getCookie(name);
      }
    }

    /**
     * set
     */
    function set(name, value) {

      if (self.sessionStorageServiceEnabled())
        return self.setStorage(name, value);
      else {
        return self.setMemoryStorage(name, value);
        //return self.setCookie(name, value);
      }
    }

    /**
     * remove
     * @param name
     */
    function remove(name) {

      if (self.sessionStorageServiceEnabled())
        return self.removeStorage(name);
      else {
        //return self.removeCookie(name);
        return self.removeMemoryStorage(name);
      }
    }


    /**
     * clearAll
     */
    function clearAll() {
      if (self.sessionStorageServiceEnabled())
        return self.clearAllStorage();
      else
        //return self.clearAllCookie();
        return self.clearAllMemoryStorage();

    }

    /* MEMORY STORAGE */
    self.MemoryStorage = null;
    /**
     * getStorage
     * @param name
     */
    function getMemoryStorage(name) {

      if (self.MemoryStorage == null)
        self.MemoryStorage = new MemoryStorage();

      return self.MemoryStorage.getItem(name);
    }

    /***
     *
     * @param name
     * @param value
     */
    function setMemoryStorage(name, value) {

      if (self.MemoryStorage == null)
        self.MemoryStorage = new MemoryStorage();

      self.MemoryStorage.setItem(name, value);
    }

    /***
     * removeStorage
     * @param name
     */
    function removeMemoryStorage(name) {

      try {
        return self.MemoryStorage.removeItem(name);
      } catch (e) {}

    }

    /***
     * clearAllStorage
     */
    function clearAllMemoryStorage() {
      return $window.sessionStorage.clear();

    }


    /* SESSIONSTORAGE */

    /**
     * getStorage
     * @param name
     */
    function getStorage(name) {
      return $window.sessionStorage.getItem(name);
    }

    /***
     *
     * @param name
     * @param value
     */
    function setStorage(name, value) {
      $window.sessionStorage.setItem(name, value);
    }

    /***
     * removeStorage
     * @param name
     */
    function removeStorage(name) {

      try {
        return $window.sessionStorage.removeItem(name);
      } catch (e) {
        // nulla
      }

    }

    /***
     * clearAllStorage
     */
    function clearAllStorage() {
      return $window.sessionStorage.clear();

    }

    /* COOKIES */

    /***
     * getCookie
     * @param name
     */
    function getCookie(name) {

      var cookie = $cookies.get(name);
      if (cookie) {
        return cookie;
      }
    }

    /***
     *
     * @param name
     * @param value
     */
    function setCookie(name, value) {
      return $cookies.put(name, value);
    }

    /***
     * removeCookie
     * @param name
     */
    function removeCookie(name) {
      return $cookies.remove(name);

    }

    /***
     * clearAllCookie
     */
    function clearAllCookie() {
      //TODO

    }
  }
})();