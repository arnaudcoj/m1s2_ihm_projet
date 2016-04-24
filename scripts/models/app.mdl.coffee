(->
  angular
    .module "quizee", ['ui.router','quizee.srv','quizee.drt']

  angular
    .module "quizee.srv", []

  angular
    .module "quizee.drt", []

  QuizeeConfig = ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      # Not logged states
      .state 'home',
        url: '/home'
        templateUrl: 'home.html'
        abstract: true
      .state 'home.dashbord',
        url: '/dashbord'
        abstract: true
        views:
          'header':
            templateUrl: 'header-unco.html'
          'sidemenu':
            templateUrl: 'sidemenu.html'
          'maincontent':
            templateUrl: 'maincontent.html'

      .state 'home.dashbord.quizee',
        url: '/quizee'
        templateUrl: 'quizee-content.html'
      .state 'home.dashbord.cours',
        url: '/cours'
        templateUrl: 'cours.html'

      # Logged states
      .state 'user',
        url: '/user'
        templateUrl: 'user.html'
        abstract: true
      .state 'user.dashbord',
        url: '/dashbord'
        abstract: true
        views:
          'header':
            templateUrl: 'header-co.html'
          'sidemenu':
            templateUrl: 'sidemenu-co.html'
          'maincontent':
            templateUrl: 'maincontent.html'

      .state 'user.dashbord.quizee',
        url: '/quizee'
        templateUrl: 'quizee-content.html'
      .state 'user.dashbord.cours',
        url: '/cours'
        templateUrl: 'cours.html'



    $urlRouterProvider.otherwise '/home/dashbord/quizee'
    return

  QuizeeConfig
    .$inject = [
      '$stateProvider'
      '$urlRouterProvider'
    ]

  angular
    .module "quizee"
    .config QuizeeConfig

  return
)()
