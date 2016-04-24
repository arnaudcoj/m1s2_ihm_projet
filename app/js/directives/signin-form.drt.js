(function() {
  "use strict";
  var SinginFormCtrl, SinginFormDrt;
  SinginFormCtrl = function($state, Auth) {
    this.errorinfo = {
      visible: false,
      message: ''
    };
    this.pass = '';
    this.username = '';
    this.signin = function() {
      var loggedin;
      loggedin = Auth.signin(this.username, this.pass);
      this.errorinfo.message = !loggedin ? "Identifiant ou Mot de passe invalide. Ré-essayez." : "";
      this.errorinfo.visible = !loggedin;
      console.log("connexion " + this.pass + " and " + this.username + ", avant", Auth.islogged(), Auth.current(), this.errorinfo);
      if (loggedin) {
        $('#signin-modal').closeModal();
        return $state.go("user.dashbord.quizee");
      }
    };
  };
  SinginFormCtrl.$inject = ['$state', 'Auth'];
  SinginFormDrt = function() {
    var directive, link;
    link = function(scope, element, attrs, ctrl) {
      console.log("LINK: ", scope);
    };
    directive = {
      restrict: 'EA',
      scope: {},
      templateUrl: 'signin-modal.html',
      link: link,
      controller: SinginFormCtrl,
      controllerAs: 'signFormCtrl',
      bindToController: true
    };
    return directive;
  };
  angular.module("quizee.drt").directive("qzSigninForm", SinginFormDrt);
})();
