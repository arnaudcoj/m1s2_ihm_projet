(function() {
  "use strict";
  var SingoutCtrl, SingoutDrt;
  SingoutCtrl = function($state, auth) {
    this.signout = function() {
      auth.signout();
      $state.go("home.login");
    };
  };
  SingoutCtrl.$inject = ['$state', 'auth'];
  SingoutDrt = function() {
    var directive, link;
    link = function(scope, element, attrs, ctrl) {
      console.log("LINK: ", scope);
      element.bind("click", function() {
        return ctrl.signout();
      });
    };
    directive = {
      restrict: 'A',
      scope: {},
      link: link,
      controller: SingoutCtrl,
      controllerAs: 'signoutCtrl',
      bindToController: true
    };
    return directive;
  };
  angular.module("quizee").directive("qzSignout", ['auth', SingoutDrt]);
})();
