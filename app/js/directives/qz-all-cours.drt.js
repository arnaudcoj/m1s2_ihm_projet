(function() {
  "use strict";
  var AllCoursCtrl, AllCoursDrt;
  AllCoursCtrl = function($state, Cours, Auth, Users, Info) {
    this.all = Cours.all();
    this.logged = Auth.islogged;
    this.subscribe = function(cours) {
      console.log("subscribe", cours);
      if (Auth.islogged()) {
        Users.subscribe(Auth.current().id, cours);
      } else {
        $('#signin-modal').openModal();
      }
    };
    this.unsubscribe = function(cours) {
      console.log("unsubscribe", cours);
      if (Auth.islogged()) {
        return Users.unsubscribe(Auth.current().id, cours);
      }
    };
    this.inscrit = function(cours) {
      if (this.logged()) {
        return Users.inscrit(Auth.current().id, cours);
      } else {
        return false;
      }
    };
    this.nbInscrits = function(cours) {
      return Cours.nbInscrits(cours);
    };
    this.mescours = function() {
      return Info.nbCours();
    };
  };
  AllCoursCtrl.$inject = ['$state', 'Cours', 'Auth', 'Users', 'Info'];
  AllCoursDrt = function() {
    var directive, link;
    link = function(scope, element, attrs, ctrl) {
      console.log("LINK all cours:", scope);
    };
    directive = {
      restrict: 'A',
      scope: true,
      link: link,
      controller: AllCoursCtrl,
      controllerAs: 'coursCtrl',
      bindToController: true
    };
    return directive;
  };
  angular.module("quizee.drt").directive("qzAllCours", AllCoursDrt);
})();
