(->
  "use strict"

  ProfilCtrl = (Auth,Info) ->
    if Auth.islogged()
      @nbQuiz = Info.nbQuiz
      @username = Info.username()
      @nbCours = Info.nbCours
      @qzOK = Info.qzOK
      @qzKO = Info.qzKO

    console.log "scope profil",this

    return

  ProfilCtrl.$inject = ['Auth','Info']

  ProfilDrt = () ->
    link = (scope, element, attrs, ctrl) ->
      console.log "LINK toto",scope
      return

    directive =
      restrict: 'A'
      link: link
      controller: ProfilCtrl
      controllerAs: 'profilCtrl'
      bindToController: true

    return directive

  angular
    .module "quizee.drt"
    .directive "qzProfil", ProfilDrt

  return
)()
