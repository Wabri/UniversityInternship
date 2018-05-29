(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name revux.Breakpoints
   * @description
   * # Breakpoints
   * Service in the revux.
   */
  angular.module(APP_NAME)
    .service('bvBreakpointsService', bvBreakpointsService)
    .filter('breakpoint', breakpoint)
    .filter('isMobile', isMobile);

  /**
   * [bvBreakpointsService description]
   * @method      bvBreakpointsService
   * @param       {[type]}           $window    [description]
   * @param       {[type]}           $rootScope [description]
   * @param       {[type]}           EVENTS     [description]
   * @constructor
   */
  function bvBreakpointsService($window, $rootScope, EVENTS) {

    // methods
    var self = this;
    self.init = init;
    self.add = add;
    self.remove = remove;
    self.get = get;
    self.getAll = getAll;
    self.getCurrent = getCurrent;
    self.doResize = doResize;
    self.isMobile = isMobile;

    // init's
    var breakpoints;
    var current;
    var win;

    /**
     * [init description]
     * @method init
     * @return {[type]} [description]
     */
    function init() {

      // prime init's
      breakpoints = {};
      current = '';
      win = $(angular.element($window));

      /**
       * [description]
       * @method
       * @return {[type]} [description]
       */
      win.resize(function() {
        var windowWidth = win.width();
        var newBreakpoint;

        angular.forEach(breakpoints, function(value, key) {
          if (windowWidth > value && newBreakpoint != key) {
            newBreakpoint = key;
          }
        });
        if (current != newBreakpoint) {
          current = newBreakpoint;
          $rootScope.$broadcast(EVENTS.RESPONSIVE_BREAKPOINT_CHANGE, current);
        }
      });
    }

    /**
     * [add description]
     * @method add
     * @param  {[type]} name     [description]
     * @param  {[type]} minWidth [description]
     */
    function add(name, minWidth) {
      breakpoints[name] = minWidth;
    }

    /**
     * [remove description]
     * @method remove
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    function remove(name) {
      delete breakpoints[name];
    }

    /**
     * [get description]
     * @method get
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    function get(name) {
      return breakpoints[name];
    }

    /**
     * [getAll description]
     * @method getAll
     * @return {[type]} [description]
     */
    function getAll() {
      return breakpoints;
    }

    /**
     * [getCurrent description]
     * @method getCurrent
     * @return {[type]}   [description]
     */
    function getCurrent() {
      return current;
    }

    /**
     * [doResize description]
     * @method doResize
     * @return {[type]} [description]
     */
    function doResize() {
      win.resize();
    }

    /**
     * [isMobile description]
     * @method isMobile
     * @return {Boolean} [description]
     */
    function isMobile() {
      return (current === 'xs' || current === 'sm' || current === 'md');
    }

  }

  /**
   * [breakpoint description]
   * @method breakpoint
   * @param  {[type]}   bvBreakpointsService [description]
   * @return {[type]}                      [description]
   */
  function breakpoint(bvBreakpointsService) {
    return function(breakpointlabel) {
      return bvBreakpointsService.get(breakpointlabel);
    };
  }

  /**
   * [isMobile description]
   * @method isMobile
   * @param  {[type]}  bvBreakpointsService [description]
   * @return {Boolean}                    [description]
   */
  function isMobile(bvBreakpointsService) {
    return function() {
      return bvBreakpointsService.isMobile();
    };
  }

}());