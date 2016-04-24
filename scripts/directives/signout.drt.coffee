(->
  "use strict"

  SingoutCtrl = ($state,Auth) ->
    @signout = () ->
      Auth.signout()
      console.log "signed out"
      $state.go "home.dashbord.quizee"
      return

    return

  SingoutCtrl.$inject = ['$state','Auth']

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
    .module "quizee.drt"
    .directive "qzSignout", SingoutDrt

  return
)()
