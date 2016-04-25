(function() {
  "use strict";
  var Info;
  Info = function(Auth, Users, Quizee) {
    var information;
    information = function() {
      if (Auth.islogged()) {
        return Users.user_info(Auth.current().id);
      }
    };
    return {
      nbQuiz: Quizee.size,
      username: function() {
        if (Auth.islogged()) {
          return Auth.current().id;
        }
      },
      nbCours: function() {
        if (Auth.islogged()) {
          return information().cours;
        }
      },
      qzOK: function() {
        var i, len, qz, ref, results;
        if (Auth.islogged()) {
          ref = information().quizee;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            qz = ref[i];
            if (qz.status === 'ok') {
              results.push(qz);
            }
          }
          return results;
        }
      },
      qzKO: function() {
        var i, len, qz, ref, results;
        if (Auth.islogged()) {
          ref = information().quizee;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            qz = ref[i];
            if (qz.status === 'ko') {
              results.push(qz);
            }
          }
          return results;
        }
      }
    };
  };
  Info.$inject = ['Auth', 'Users', 'Quizee'];
  angular.module("quizee.srv").factory("Info", Info);
})();
