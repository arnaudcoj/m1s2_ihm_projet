(->
  "use strict"

  AllCoursCtrl = ($state,Cours, Auth,Users) ->
    @all = Cours.all()

    @subscribe = (cours) ->
      if Auth.islogged()
        Users.subscribe(Auth.current().id,cours)
      else
        $('#signin-modal').openModal()
      return

    @unsubscribe = (cours) ->
        Users.unsubscribe(Auth.current().id,cours) if Auth.islogged()

    @inscrit = (cours) ->
      Users.inscrit("honore",cours)
      # if Auth.islogged() then Users.inscrit(Auth.current(),cours) else no

    return


  AllCoursCtrl.$inject = ['$state','Cours','Auth','Users']

  AllCoursDrt = () ->
    link = (scope, element, attrs, ctrl) ->
      console.log "LINK all cours:", scope
      return

    directive =
      restrict: 'A'
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
