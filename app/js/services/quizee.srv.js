(function() {
  "use strict";
  var Quizee;
  Quizee = function(Users) {
    var all, shuffle;
    all = [
      {
        id: 1,
        status: 'none',
        errors: [],
        question: "Combien font 1 + 1 ?",
        choix: [
          {
            txt: 3,
            checked: false
          }, {
            txt: 2,
            checked: false
          }, {
            txt: 8,
            checked: false
          }, {
            txt: "Je ne sais pas.",
            checked: false
          }
        ],
        aswrIdx: [1],
        selected: []
      }, {
        id: 2,
        status: 'none',
        errors: [],
        question: "Combien font 1 + 2 ?",
        choix: [
          {
            txt: 3,
            checked: false
          }, {
            txt: 2,
            checked: false
          }, {
            txt: 8,
            checked: false
          }, {
            txt: "Je ne sais pas.",
            checked: false
          }
        ],
        aswrIdx: [0],
        selected: []
      }, {
        id: 3,
        status: 'none',
        errors: [],
        question: "Combien font 4 + 4 ?",
        choix: [
          {
            txt: 3,
            checked: false
          }, {
            txt: 2,
            checked: false
          }, {
            txt: 8,
            checked: false
          }, {
            txt: "Je ne sais pas.",
            checked: false
          }
        ],
        aswrIdx: [2],
        selected: []
      }
    ];
    shuffle = function(arr) {
      var i, j, ref;
      i = arr.length;
      if (i === 0) {
        return false;
      }
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        ref = [arr[j], arr[i]], arr[i] = ref[0], arr[j] = ref[1];
      }
      return arr;
    };
    return {
      size: all.length,
      all: function() {
        return shuffle(all.slice(0));
      },
      pick_random: function() {
        return all[Math.floor(Math.random() * all.length) + 0];
      },
      save_to_user: function(quiz, user) {
        var aswrIdx, errors, id, selected, status;
        id = quiz.id, status = quiz.status, selected = quiz.selected, aswrIdx = quiz.aswrIdx, errors = quiz.errors;
        return Users.save_quizee({
          id: id,
          status: status,
          selected: selected,
          aswrIdx: aswrIdx,
          errors: errors
        }, user);
      }
    };
  };
  Quizee.$inject = ['Users'];
  angular.module("quizee.srv").factory("Quizee", Quizee);
})();
