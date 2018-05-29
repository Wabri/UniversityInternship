(function () {
  'use strict';

  angular.module(APP_NAME)
    .service('bvAlertService', bvAlertService)

  /**
   * bvAlertService
   * @param {*}  
   * @param {*}  
   */
  function bvAlertService($translate, $timeout, $mdDialog) {

    // methods
    var self = this;

    //metodi
    self.warn = warn;
    self.confirm = confirm;
    self.confirmAlert = confirmAlert;
    self.waitStart = waitStart;
    self.waitEnd = waitEnd;

    /**
     * 
     * @param {*} title 
     * @param {*} message 
     */
    function warn(title, message) {


      var parentEl = angular.element(document.body);
      $timeout(
        $mdDialog.show({
          parent: parentEl,
          escapeToClose: false,
          template: '' +
            '<md-dialog aria-label="Alert">' +
            ' <form ng-cloak>' +
            '   <md-toolbar>' +
            '     <div class="md-toolbar-tools">' +
            '       <h2>' + title + '</h2>' +
            '       <span flex></span>' +
            '     </div>' +
            '   </md-toolbar>' +
            '   <md-dialog-content>' +
            '     <div class="md-dialog-content">' +
            '       <h2>' + message + '</h2>' +
            '     </div>' +
            '   </md-dialog-content>' +
            '   <md-dialog-actions layout="row">' +
            '     <span flex></span>' +
            '     <md-button class="md-raised" ng-click="closeDialog()">Chiudi' +
            '       <md-icon md-svg-src="assets/images/icons/ic_thumb_up_black_18px.svg"></md-icon>' +
            '     </md-button>' +
            '   </md-dialog-actions>' +
            ' </form>' +
            '</md-dialog>',
          controller: function DialogController($scope, $mdDialog) {
            $scope.closeDialog = function () {
              $mdDialog.hide();
            }
          }
        }));

      return

      $mdDialog.show(
        $mdDialog.alert()
        .clickOutsideToClose(false)
        .title(title)
        .textContent(message)
        .ariaLabel('Alert Dialog Demo')
        .ok('Chiudi')
      );

    }

    /**
     * 
     * @param {*} scope 
     * @param {*} message 
     * @param {*} title 
     */
    function confirm(scope, message, title) {}

    /**
     * 
     * @param {*} scope 
     * @param {*} message 
     * @param {*} title 
     * @param {*} icon 
     */
    function confirmAlert(scope, message, title, icon) {}

    /**
     * 
     */
    function waitStart(message) {

      // tratta message
      if (!message)
        message = $translate.instant("common.wait.title");

      $timeout(
        $mdDialog.show({
          parent: angular.element(document.body),
          clickOutsideToClose: false,
          escapeToClose: false,
          ariaLabel: 'Alert Dialog Demo',
          template: '' +
            '<div class="md-dialog-container">' +
            ' <md-dialog class="bv-dialog-wait">' +
            '   <h3 class="bv-dialog-wait-title">' + message + '</h3>' +
            '   <div layout="row" layout-sm="column" layout-align="space-around">' +
            '     <md-progress-circular md-diameter="30" md-mode="indeterminate"></md-progress-circular>' +
            '   </div>' +
            ' </md-dialog>' +
            '</div>'
        }));
    }

    /**
     * 
     */
    function waitEnd() {
      $timeout($mdDialog.hide());
    }
  }

})();