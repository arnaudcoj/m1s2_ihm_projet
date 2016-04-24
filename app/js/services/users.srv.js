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
          cours: ["FAA", "IHM", "SVL", "CAR"]
        }
      }, {
        "arnaud": {
          mdp: "arnaud",
          cours: ["FAA", "IHM", "Compil", "HECI", "M3DS"]
        }
      }, {
        "fabien": {
          mdp: "fabien",
          cours: ["FAA", "IHM"]
        }
      }, {
        "pierre-claver": {
          mdp: "pierre-claver",
          cours: ["FAA", "IHM", "CANARD", "TI"]
        }
      }, {
        "salim": {
          mdp: "salim",
          cours: ["FAA", "IHM", "TI", "CAR"]
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
      subscribe: function(user, cours) {
        var ref;
        return (ref = users[user]) != null ? ref.cours.push(cours) : void 0;
      },
      inscrit: function(user, cours) {
        var i, len, u;
        console.log("ask", user, cours);
        for (i = 0, len = users.length; i < len; i++) {
          u = users[i];
          console.log("user", u, user, user in u);
          if (user in u) {
            console.log("found user");
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
      }
    };
  };
  angular.module("quizee.srv").factory("Users", Users);
})();
