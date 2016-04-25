(->
  "use strict"

  Quizee = (Users) ->
    all = [
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

    shuffle = (arr) ->
      i = arr.length
      return false if i is 0

      while --i
          j = Math.floor(Math.random() * (i+1))
          [arr[i], arr[j]] = [arr[j], arr[i]]
      arr

    return {
      size: all.length
      all: ->
        shuffle(all[..])
      pick_random: ->
        all[Math.floor(Math.random() * all.length) + 0]
      save_to_user: (quiz,user) ->
        {id,status,selected,aswrIdx,errors} = quiz
        Users.save_quizee {id,status,selected,aswrIdx,errors}, user
    }

  Quizee.$inject = ['Users']

  angular
    .module "quizee.srv"
    .factory "Quizee", Quizee

  return
)()
