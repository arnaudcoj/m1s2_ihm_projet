(->
  angular
    .module "quizee", ['ui.router']


  QuizeeConfig = ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      # Not logged states
      .state 'home',
        url: '/home'
        templateUrl: 'home.html'
        abstract: true

      .state 'home.login',
        url: '/login'
        views:
          'header':
            templateUrl: 'header-unco.html'
          'sidemenu':
            templateUrl: 'sidemenu.html'
          'maincontent':
            templateUrl: 'maincontent.html'

      # Logged states
      .state 'account',
        url: '/account'
        templateUrl: 'account.html'
        abstract: true

      .state 'account.dashbord',
        url: '/dashbord'
        views:
          'header':
            templateUrl: 'header-co.html'
          'sidemenu':
            templateUrl: 'sidemenu.html'
          'maincontent':
            templateUrl: 'maincontent.html'

    $urlRouterProvider.otherwise '/home/login'
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
      # .state('co', {
      #   url: '/co',
      #   templateUrl: 'co.html',
      #   abstract: true
      # })
      #
      # .state('co.home', {
      #   url: '/home',
      #   views: {
      #     'cote': {
      #       template: '<h4>Side view co</h4>'
      #     },
      #     'milieu': {
      #       template: '<h4>Middle view co</h4>'
      #     }
      #   }
      # })
