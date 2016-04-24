(->
  "use strict"

  SinginFormCtrl = ($state,auth) ->
    @errorinfo =
      visible: no
      message: ''

    @pass = ''
    @username = ''

    @signin = () ->
      loggedin = auth.signin(@username,@pass)
      @errorinfo.message = if not loggedin then "Identifiant ou Mot de passe invalide. Ré-essayez." else ""
      @errorinfo.visible = not loggedin
      console.log "connexion #{@pass} and #{@username}, avant", auth.islogged(), auth.current(), @errorinfo
      if loggedin
        $('#signin-modal').closeModal()
        $state.go "account.dashbord"

    return

  SinginFormCtrl.$inject = ['$state','auth']

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
    .module "quizee"
    .directive "qzSigninForm", ['auth', SinginFormDrt]

  return
)()
