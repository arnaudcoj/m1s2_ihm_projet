(->
  "use strict"

  AllQuizCtrl = ($state, Auth) ->
    @all = [
      {
        id: 1
        status: 'none'
        errors: []
        question: "Combien font 1 + 1 ?"
        choix: [
          {txt:3, checked:false}
          {txt:2, checked:false}
          {txt:8, checked:false}
          {txt:"Je ne sais pas.", checked:false}
        ]
        aswrIdx:[1]
        selected: []
      }
      {
        id: 2
        status: 'none'
        errors: []
        question: "Combien font 1 + 2 ?"
        choix: [
          {txt:3, checked:false}
          {txt:2, checked:false}
          {txt:8, checked:false}
          {txt:"Je ne sais pas.", checked:false}
        ]
        aswrIdx:[0]
        selected: []
      }
      {
        id: 3
        status: 'none'
        errors: []
        question: "Combien font 4 + 4 ?"
        choix: [
          {txt:3, checked:false}
          {txt:2, checked:false}
          {txt:8, checked:false}
          {txt:"Je ne sais pas.", checked:false}
        ]
        aswrIdx:[2]
        selected: []
      }
    ]

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
      return

    return

  AllQuizCtrl.$inject = ['$state','Auth']

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
