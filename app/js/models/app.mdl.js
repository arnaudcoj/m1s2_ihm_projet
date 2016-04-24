(function() {
  var QuizeeConfig;
  angular.module("quizee", ['ui.router']);
  QuizeeConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home.html',
      abstract: true
    }).state('home.login', {
      url: '/login',
      views: {
        'header': {
          templateUrl: 'header-unco.html'
        },
        'sidemenu': {
          templateUrl: 'sidemenu.html'
        },
        'maincontent': {
          templateUrl: 'maincontent.html'
        }
      }
    }).state('account', {
      url: '/account',
      templateUrl: 'account.html',
      abstract: true
    }).state('account.dashbord', {
      url: '/dashbord',
      views: {
        'header': {
          templateUrl: 'header-co.html'
        },
        'sidemenu': {
          templateUrl: 'sidemenu.html'
        },
        'maincontent': {
          templateUrl: 'maincontent.html'
        }
      }
    });
    $urlRouterProvider.otherwise('/home/login');
  };
  QuizeeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  angular.module("quizee").config(QuizeeConfig);
})();
