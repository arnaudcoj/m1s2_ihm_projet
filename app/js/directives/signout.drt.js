(function() {
  "use strict";
  var SingoutCtrl, SingoutDrt;
  SingoutCtrl = function($state, Auth) {
    this.signout = function() {
      Auth.signout();
      console.log("signed out");
      $state.go("home.dashbord.quizee");
    };
  };
  SingoutCtrl.$inject = ['$state', 'Auth'];
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
  angular.module("quizee.drt").directive("qzSignout", SingoutDrt);
})();
