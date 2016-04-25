(function() {
  "use strict";
  var ProfilCtrl, ProfilDrt;
  ProfilCtrl = function(Auth, Info) {
    if (Auth.islogged()) {
      this.nbQuiz = Info.nbQuiz;
      this.username = Info.username();
      this.nbCours = Info.nbCours;
      this.qzOK = Info.qzOK;
      this.qzKO = Info.qzKO;
    }
    console.log("scope profil", this);
  };
  ProfilCtrl.$inject = ['Auth', 'Info'];
  ProfilDrt = function() {
    var directive, link;
    link = function(scope, element, attrs, ctrl) {
      console.log("LINK toto", scope);
    };
    directive = {
      restrict: 'A',
      link: link,
      controller: ProfilCtrl,
      controllerAs: 'profilCtrl',
      bindToController: true
    };
    return directive;
  };
  angular.module("quizee.drt").directive("qzProfil", ProfilDrt);
})();
