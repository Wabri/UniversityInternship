(function () {
  'use strict';

  angular.module(APP_NAME)
    .service('bvLocaleService', bvLocaleService);

  /**
   * 
   * @param {*}  
   * @param {*} LOCALES 
   * @param {*}  
   * @param {*} tmhDynamicLocale 
   */
  function bvLocaleService($translate, CUSTOMIZE, $rootScope, tmhDynamicLocale) {

    // VARS
    var localesObj = CUSTOMIZE.LOCALES.locales;

    // locales and locales display names
    var _LOCALES = Object.keys(localesObj);
    if (!_LOCALES || _LOCALES.length === 0) {
      console.error('There are no _LOCALES provided');
    }
    var _LOCALES_DISPLAY_NAMES = [];
    _LOCALES.forEach(function (locale) {
      _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
    });

    // L'idioma attualmente selezionato
    var currentLocale = $translate.storage().get();
    if (!currentLocale) {
      currentLocale = $translate.preferredLanguage();
    }

    // Metodi interni
    var checkLocaleIsValid = function (locale) {
      return _LOCALES.indexOf(locale) !== -1;
    };

    var setLocale = function (locale) {
      if (!checkLocaleIsValid(locale)) {
        console.error('Locale name "' + locale + '" is invalid');
        return;
      }
      currentLocale = locale;
      $translate.use(locale);
    };

    /**
     * Stop application loading animation when translations are loaded
     */
    // EVENTS
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      document.documentElement.setAttribute('lang', data.language); // sets "lang" attribute to html

      tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-')); // load Angular locale
    });


    return {
      getLocaleDisplayName: function () {
        return localesObj[currentLocale];
      },
      setLocaleByDisplayName: function (localeDisplayName) {
        setLocale(
          _LOCALES[
            _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName) // get locale index
          ]
        );
      },
      getLocalesDisplayNames: function () {
        return _LOCALES_DISPLAY_NAMES;
      }
    };
  }

})();