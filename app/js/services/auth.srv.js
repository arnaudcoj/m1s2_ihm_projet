(function() {
  "use strict";
  var Auth;
  Auth = function() {
    var current, users;
    users = {
      "honore": "honore",
      "arnaud": "arnaud",
      "fabien": "fabien",
      "pierre-claver": "pierre-claver",
      "salime": "salim"
    };
    current = null;
    return {
      users: users,
      current: function() {
        return current;
      },
      signin: function(username, pass) {
        var ok;
        ok = users[username] === pass;
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
  };
  angular.module("quizee").factory("auth", Auth);
})();
