(->
  "use strict"

  SinginFormCtrl = ($state,Auth) ->
    @errorinfo =
      visible: no
      message: ''

    @pass = ''
    @username = ''

    @signin = () ->
      loggedin = Auth.signin(@username,@pass)
      @errorinfo.message = if not loggedin then "Identifiant ou Mot de passe invalide. Ré-essayez." else ""
      @errorinfo.visible = not loggedin
      console.log "connexion #{@pass} and #{@username}, avant", Auth.islogged(), Auth.current(), @errorinfo
      if loggedin
        $('#signin-modal').closeModal()
        $state.go "user.dashbord.quizee"

    return

  SinginFormCtrl.$inject = ['$state','Auth']

  SinginFormDrt = () ->
    link = (scope, element, attrs, ctrl) ->
      console.log "LINK: ", scope
      return

    directive =
      restrict: 'EA'
      scope: {}
      templateUrl: 'signin-modal.html'
      link: link
      controller: SinginFormCtrl
      controllerAs: 'signFormCtrl'
      bindToController: true

    return directive

  angular
    .module "quizee.drt"
    .directive "qzSigninForm", SinginFormDrt

  return
)()
