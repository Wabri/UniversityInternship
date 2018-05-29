(function () {
    'use strict';

    /**
     * config
     * @type {[type]}
     */
    angular
        .module(APP_NAME)
        .constant('EVENTS', {
            HTTP_ERROR: 'EVENT_HTTP_ERROR',
            RESPONSIVE_BREAKPOINT_CHANGE: 'RESPONSIVE_BREAKPOINT_CHANGE',
            BUSY_STARTED: 'BUSY_STARTED',
            BUSY_ENDED: 'BUSY_ENDED'
        })
        .constant('SINGLE', 'singolo')
        .constant('DEBUG_MODE', true);

}());