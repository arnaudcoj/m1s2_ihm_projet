(->
  "use strict"

  AllQuizCtrl = ($state, Auth, Quizee) ->
    @all = Quizee.all()

    @selectAnswer = (quiz,idx,checked) ->
      if checked
        quiz.selected.push idx
      else
        quiz.selected.splice (quiz.selected.indexOf idx), 1
      console.log "selected", @all
      return

    @answerOK = (quiz,index) ->
      quiz.errors.indexOf(index) > -1

    @validate = (quiz) ->
      quiz.errors = []
      if (quiz.selected.every (current) => current in quiz.aswrIdx)
        if quiz.selected.length == quiz.aswrIdx.length then quiz.status = 'ok' else quiz.status = 'ko'
      else
        quiz.status = 'ko'
      for v in quiz.selected
        quiz.errors.push v if v not in quiz.aswrIdx
      console.log "quiz id", quiz,@all
      if Auth.islogged() then Quizee.save_to_user(quiz,Auth.current()?.id)
      return

    return

  AllQuizCtrl.$inject = ['$state','Auth', 'Quizee']

  AllQuizDrt = () ->
    link = (scope, element, attrs, ctrl) ->
      console.log "LINK all quiz:", scope
      return

    directive =
      restrict: 'A'
      link: link
      controller: AllQuizCtrl
      controllerAs: 'quizCtrl'
      bindToController: true

    return directive

  angular
    .module "quizee.drt"
    .directive "qzAllQuiz", AllQuizDrt

  return
)()
