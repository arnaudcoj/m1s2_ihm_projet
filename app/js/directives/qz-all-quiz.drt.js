var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

(function() {
  "use strict";
  var AllQuizCtrl, AllQuizDrt;
  AllQuizCtrl = function($state, Auth, Quizee) {
    this.all = Quizee.all();
    this.selectAnswer = function(quiz, idx, checked) {
      if (checked) {
        quiz.selected.push(idx);
      } else {
        quiz.selected.splice(quiz.selected.indexOf(idx), 1);
      }
      console.log("selected", this.all);
    };
    this.answerOK = function(quiz, index) {
      return quiz.errors.indexOf(index) > -1;
    };
    this.validate = function(quiz) {
      var i, len, ref, ref1, v;
      quiz.errors = [];
      if (quiz.selected.every((function(_this) {
        return function(current) {
          return indexOf.call(quiz.aswrIdx, current) >= 0;
        };
      })(this))) {
        if (quiz.selected.length === quiz.aswrIdx.length) {
          quiz.status = 'ok';
        } else {
          quiz.status = 'ko';
        }
      } else {
        quiz.status = 'ko';
      }
      ref = quiz.selected;
      for (i = 0, len = ref.length; i < len; i++) {
        v = ref[i];
        if (indexOf.call(quiz.aswrIdx, v) < 0) {
          quiz.errors.push(v);
        }
      }
      console.log("quiz id", quiz, this.all);
      if (Auth.islogged()) {
        Quizee.save_to_user(quiz, (ref1 = Auth.current()) != null ? ref1.id : void 0);
      }
    };
  };
  AllQuizCtrl.$inject = ['$state', 'Auth', 'Quizee'];
  AllQuizDrt = function() {
    var directive, link;
    link = function(scope, element, attrs, ctrl) {
      console.log("LINK all quiz:", scope);
    };
    directive = {
      restrict: 'A',
      link: link,
      controller: AllQuizCtrl,
      controllerAs: 'quizCtrl',
      bindToController: true
    };
    return directive;
  };
  angular.module("quizee.drt").directive("qzAllQuiz", AllQuizDrt);
})();
