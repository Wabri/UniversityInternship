(function () {
    "use strict";

    angular.module(APP_NAME).directive("bvWait", bvWait);

    /**
     * bvWait : direttiva di attesa
     */
    function bvWait() {
        var directive = {
            restrict: "E",
            scope: {
                bvApi: "=",
                bvPromiseReady: "=",
                bvType: "@"
            },
            controller: controller,
            templateUrl: "common/directives/bvWait/bvWait.directive.html"
        };

        return directive;
    }

    /**
     *
     */
    function controller($scope, $rootScope, $q, $mdDialog, $timeout, EVENTS) {
        init();

        /**
         *
         */
        function init() {
            initApi();
            initDefaults();
            initEvents();
        }

        /**
         * initApi
         */
        function initApi() {
            // init api
            if ($scope.bvApi) $scope.bvApi.show = show;

            // init primises
            if ($scope.bvPromiseReady) $scope.bvPromiseReady.resolve();
        }

        function initDefaults() {
            if (!$scope.bvType) {
                $scope.bvType = "circular";
            }
        }

        function initEvents() {

            // intercetta gli eventi
            $rootScope.$on(EVENTS.BUSY_STARTED, function () {
                show();
            });

            $rootScope.$on(EVENTS.BUSY_ENDED, function () {
                hide();
            });
        }

        /***
         * show : mostra il dialogo di attesa
         */
        function show() {
            $mdDialog.show({
                contentElement: "#waitDialog",
                parent: angular.element(document.body),
                clickOutsideToClose: false
            });
        }

        /**
         * hide : nasconde il dialogo di attesa
         */

        function hide() {
            $mdDialog.hide();
        }
    }
})();