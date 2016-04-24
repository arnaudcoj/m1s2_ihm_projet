(->
  "use strict"

  SingoutCtrl = ($state,auth) ->
    @signout = () ->
      auth.signout()
      console.log "signed out"
      $state.go "home.login"
      return

    return

  SingoutCtrl.$inject = ['$state','auth']

  SingoutDrt = () ->
    link = (scope, element, attrs, ctrl) ->
      console.log "LINK: ", scope
      element.bind "click", () ->
        ctrl.signout()
      return

    directive =
      restrict: 'A'
      scope: {}
      link: link
      controller: SingoutCtrl
      controllerAs: 'signoutCtrl'
      bindToController: true

    return directive

  angular
    .module "quizee"
    .directive "qzSignout", ['auth', SingoutDrt]

  return
)()
