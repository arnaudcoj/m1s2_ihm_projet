(function() {
  "use strict";
  var SinginFormCtrl, SinginFormDrt;
  SinginFormCtrl = function($state, auth) {
    this.errorinfo = {
      visible: false,
      message: ''
    };
    this.pass = '';
    this.username = '';
    this.signin = function() {
      var loggedin;
      loggedin = auth.signin(this.username, this.pass);
      this.errorinfo.message = !loggedin ? "Identifiant ou Mot de passe invalide. Ré-essayez." : "";
      this.errorinfo.visible = !loggedin;
      console.log("connexion " + this.pass + " and " + this.username + ", avant", auth.islogged(), auth.current(), this.errorinfo);
      if (loggedin) {
        $('#signin-modal').closeModal();
        $state.go("account.dashbord");
      }
    };
  };
  SinginFormCtrl.$inject = ['$state', 'auth'];
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
  angular.module("quizee").directive("qzSigninForm", ['auth', SinginFormDrt]);
})();
