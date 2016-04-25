var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

(function() {
  "use strict";
  var Cours;
  Cours = function(Users) {
    var all;
    all = [
      {
        name: "FAA",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }, {
        name: "HECI",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }, {
        name: "Compil",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }, {
        name: "M3DS",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }, {
        name: "CAR",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }, {
        name: "TI",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }, {
        name: "CANARD",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }, {
        name: "IHM",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }, {
        name: "SVL",
        docs: {
          tp: ['un/chemin/tp.pdf'],
          td: ['un/autre/path/td.pdf']
        }
      }
    ];
    return {
      all: function() {
        return all;
      },
      nbInscrits: function(cours) {
        var i, j, len, u, user, userarr;
        userarr = ((function() {
          var j, len, ref, results;
          ref = Users.all();
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            user = ref[j];
            results.push(user);
          }
          return results;
        })()).map(function(v) {
          var _, val;
          return ((function() {
            var results;
            results = [];
            for (_ in v) {
              val = v[_];
              results.push(val);
            }
            return results;
          })())[0];
        });
        i = 0;
        for (j = 0, len = userarr.length; j < len; j++) {
          u = userarr[j];
          if (indexOf.call(u.cours, cours) >= 0) {
            i++;
          }
        }
        return i;
      }
    };
  };
  Cours.$inject = ['Users'];
  angular.module("quizee.srv").factory("Cours", Cours);
})();
