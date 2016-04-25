(function() {
  "use strict";
  var Info;
  Info = function(Auth, Users, Quizee) {
    var information;
    information = function() {
      if (Auth.islogged()) {
        console.log(Auth.current().id);
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
          return information().cours.length;
        }
      },
      qzOK: function() {
        var qz;
        if (Auth.islogged()) {
          return ((function() {
            var i, len, ref, results;
            ref = information().quizee;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              qz = ref[i];
              if (qz.status === 'ok') {
                results.push(qz);
              }
            }
            return results;
          })()).length;
        }
      },
      qzKO: function() {
        var qz;
        if (Auth.islogged()) {
          return ((function() {
            var i, len, ref, results;
            ref = information().quizee;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              qz = ref[i];
              if (qz.status === 'ko') {
                results.push(qz);
              }
            }
            return results;
          })()).length;
        }
      }
    };
  };
  Info.$inject = ['Auth', 'Users', 'Quizee'];
  angular.module("quizee.srv").factory("Info", Info);
})();
