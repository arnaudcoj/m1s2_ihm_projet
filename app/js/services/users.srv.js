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
          quizee: []
        }
      }, {
        "arnaud": {
          mdp: "arnaud",
          cours: ["FAA", "IHM", "Compil", "HECI", "M3DS"],
          quizee: []
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
          quizee: []
        }
      }, {
        "salim": {
          mdp: "salim",
          cours: ["FAA", "IHM", "TI", "CAR"],
          quizee: []
        }
      }
    ];
    current = null;
    return {
      all: function() {
        return users;
      },
      cours: function(user) {
        return user.cours;
      },
      user_info: function(user) {
        var q, res;
        res = ((function() {
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
        console.log("user_info", res);
        return res;
      },
      subscribe: function(user, cours) {
        var ref;
        return (ref = users[user]) != null ? ref.cours.push(cours) : void 0;
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
        var elemIdx, ref, ref1;
        elemIdx = (ref = users[user]) != null ? ref.cours.indexOf(cours) : void 0;
        if (elemIdx >= 0) {
          return (ref1 = users[user]) != null ? ref1.splice(elemIdx, 1) : void 0;
        }
      },
      save_quizee: function(quiz, user) {
        var i, len, q;
        for (i = 0, len = users.length; i < len; i++) {
          q = users[i];
          if (user in q) {
            q[user].quizee.push(quiz);
          }
        }
        return console.log("save", users);
      }
    };
  };
  angular.module("quizee.srv").factory("Users", Users);
})();
