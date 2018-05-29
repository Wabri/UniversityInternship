(function() {
  'use strict';

  angular
    .module(APP_NAME)
    .factory('bvStoreFactory', bvStoreFactory);

  /**
   * StoreFactory
   */
  function bvStoreFactory() {

    var bvStoreFactoryBean = {};

    return bvStoreFactoryBean;
  }

}());