var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

(function() {
  "use strict";
  var Users;
  Users = function() {
    var current, users;
    users = [
      {
        "honore": {
          mdp: "honore",
          cours: ["FAA", "IHM", "SVL", "CAR"],
          quizee: [
            {
              id: 3,
              status: 'ok',
              errors: [],
              aswrIdx: [2],
              selected: []
            }
          ]
        }
      }, {
        "arnaud": {
          mdp: "arnaud",
          cours: ["FAA", "IHM", "Compil", "HECI", "M3DS"],
          quizee: [
            {
              id: 2,
              status: 'ok',
              errors: [],
              aswrIdx: [2],
              selected: []
            }, {
              id: 3,
              status: 'ok',
              errors: [],
              aswrIdx: [2],
              selected: []
            }
          ]
        }
      }, {
        "fabien": {
          mdp: "fabien",
          cours: ["FAA", "IHM"],
          quizee: []
        }
      }, {
        "pierre-claver": {
          mdp: "pierre-claver",
          cours: ["FAA", "IHM", "CANARD", "TI"],
          quizee: [
            {
              id: 2,
              status: 'ok',
              errors: [],
              aswrIdx: [2],
              selected: []
            }, {
              id: 1,
              status: 'ok',
              errors: [],
              aswrIdx: [2],
              selected: []
            }
          ]
        }
      }, {
        "salim": {
          mdp: "salim",
          cours: ["IHM", "TI", "CAR"],
          quizee: []
        }
      }
    ];
    current = null;
    return {
      all: function() {
        return users;
      },
      user_info: function(user) {
        var q;
        return ((function() {
          var i, len, results;
          results = [];
          for (i = 0, len = users.length; i < len; i++) {
            q = users[i];
            if (user in q) {
              results.push(q);
            }
          }
          return results;
        })())[0][user];
      },
      subscribe: function(user, cours) {
        var i, len, results, u;
        results = [];
        for (i = 0, len = users.length; i < len; i++) {
          u = users[i];
          if (user in u) {
            results.push(u[user].cours.push(cours));
          } else {
            results.push(void 0);
          }
        }
        return results;
      },
      inscrit: function(user, cours) {
        var i, len, u;
        for (i = 0, len = users.length; i < len; i++) {
          u = users[i];
          if (user in u) {
            if (indexOf.call(u[user].cours, cours) >= 0) {
              return true;
            }
          }
        }
        return false;
      },
      unsubscribe: function(user, cours) {
        var elemIdx, i, len, results, u;
        results = [];
        for (i = 0, len = users.length; i < len; i++) {
          u = users[i];
          if (user in u) {
            elemIdx = u[user].cours.indexOf(cours);
            if (elemIdx > -1) {
              results.push(u[user].cours.splice(elemIdx, 1));
            } else {
              results.push(void 0);
            }
          } else {
            results.push(void 0);
          }
        }
        return results;
      },
      save_quizee: function(quiz, user) {
        var i, len, q, results;
        results = [];
        for (i = 0, len = users.length; i < len; i++) {
          q = users[i];
          if (user in q) {
            results.push(q[user].quizee.push(quiz));
          }
        }
        return results;
      }
    };
  };
  angular.module("quizee.srv").factory("Users", Users);
})();
