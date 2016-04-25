(->
  "use strict"

  AllCoursCtrl = ($state,Cours, Auth,Users,Info) ->
    @all = Cours.all()
    @logged = Auth.islogged
    @subscribe = (cours) ->
      console.log "subscribe",cours
      if Auth.islogged()
        Users.subscribe(Auth.current().id,cours)
      else
        $('#signin-modal').openModal()
      return

    @unsubscribe = (cours) ->
      console.log "unsubscribe",cours
      Users.unsubscribe(Auth.current().id,cours) if Auth.islogged()

    @inscrit = (cours) ->
      if @logged() then Users.inscrit(Auth.current().id,cours) else false

    @nbInscrits = (cours)-> Cours.nbInscrits cours

    @mescours = -> Info.nbCours()

    return


  AllCoursCtrl.$inject = ['$state','Cours','Auth','Users','Info']

  AllCoursDrt = () ->
    link = (scope, element, attrs, ctrl) ->
      console.log "LINK all cours:", scope
      return

    directive =
      restrict: 'A'
      scope:true
      link: link
      controller: AllCoursCtrl
      controllerAs: 'coursCtrl'
      bindToController: true

    return directive

  angular
    .module "quizee.drt"
    .directive "qzAllCours", AllCoursDrt

  return
)()
