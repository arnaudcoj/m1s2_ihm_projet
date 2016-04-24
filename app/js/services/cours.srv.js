(function() {
  "use strict";
  var Cours;
  Cours = function() {
    var all;
    all = ["FAA", "HECI", "Compil", "M3DS", "CAR", "TI", "CANARD", "IHM", "SVL"];
    return {
      all: function() {
        return all;
      }
    };
  };
  angular.module("quizee.srv").factory("Cours", Cours);
})();
