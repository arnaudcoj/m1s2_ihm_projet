(function() {
  "use strict";
  var AllCoursCtrl, AllCoursDrt;
  AllCoursCtrl = function($state, Cours, Auth, Users) {
    this.all = Cours.all();
    this.subscribe = function(cours) {
      if (Auth.islogged()) {
        Users.subscribe(Auth.current().id, cours);
      } else {
        $('#signin-modal').openModal();
      }
    };
    this.unsubscribe = function(cours) {
      if (Auth.islogged()) {
        return Users.unsubscribe(Auth.current().id, cours);
      }
    };
    this.inscrit = function(cours) {
      return Users.inscrit("honore", cours);
    };
  };
  AllCoursCtrl.$inject = ['$state', 'Cours', 'Auth', 'Users'];
  AllCoursDrt = function() {
    var directive, link;
    link = function(scope, element, attrs, ctrl) {
      console.log("LINK all cours:", scope);
    };
    directive = {
      restrict: 'A',
      link: link,
      controller: AllCoursCtrl,
      controllerAs: 'coursCtrl',
      bindToController: true
    };
    return directive;
  };
  angular.module("quizee.drt").directive("qzAllCours", AllCoursDrt);
})();
