// globals
//
var APP_NAME = "skeleton";
var HEADER_NAME = "Skeleton-Handle-Errors-Generically";
var specificallyHandleInProgress = false;

(function () {
  "use strict";

  angular.module(APP_NAME, [
    "ui.router", // Routing
    "ngResource", // angular-resource
    "ngAnimate",
    "angularMoment",
    "ngMaterial",
    "md.data.table",
    "ngSanitize", // Sanitize translations (security)
    "pascalprecht.translate", // Angular Translate
    "tmh.dynamicLocale",
    "ngCookies"
  ]);
})();
