(function() {
  "use strict";
  var Auth;
  Auth = function(Users) {
    var current, key, res, user, users;
    users = (function() {
      var i, len, ref, results;
      ref = Users.all();
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        user = ref[i];
        key = Object.keys(user)[0];
        res = {};
        res[key] = user[key].mdp;
        results.push(res);
      }
      return results;
    })();
    current = null;
    return {
      users: function() {
        return users;
      },
      current: function() {
        return current;
      },
      signin: function(username, pass) {
        var ok, u;
        u = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = users.length; i < len; i++) {
            user = users[i];
            if (username in user) {
              results.push(user);
            }
          }
          return results;
        })();
        if (u.length === 1) {
          ok = u[0][username] === pass;
        }
        console.log("user trouve", u, ok);
        if (ok) {
          current = {
            id: username
          };
        }
        return ok;
      },
      signout: function() {
        return current = null;
      },
      islogged: function() {
        return current != null;
      }
    };
    return Auth.$inject = ['Users'];
  };
  angular.module("quizee.srv").factory("Auth", Auth);
})();
