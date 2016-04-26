(->
  "use strict"

  Quizee = (Users) ->
    all = [
      {
        id: 1
        related: "IHM"
        status: 'none'
        errors: []
        question: "Qui a inventé le code Rousseau de la route ?"
        choix: [
          {txt:"Jean-Jacques Rousseau", checked:false}
          {txt:"Un pakistanais en slip.", checked:false}
          {txt:"Louis Rousseau", checked:false}
          {txt:"La réponse D.", checked:false}
        ]
        aswrIdx:[1]
        selected: []
      }
      {
        id: 2
        related: "IHM"
        status: 'none'
        errors: []
        question: "Combien font 1 + 2 ?"
        choix: [
          {txt:"3 (est-ce ta dernière bafouille ?)", checked:false}
          {txt:2, checked:false}
          {txt:8, checked:false}
          {txt:"Je ne sais pas.", checked:false}
        ]
        aswrIdx:[0]
        selected: []
      }
      {
        id: 3
        related: "FAA"
        status: 'none'
        errors: []
        question: "Que signifie Hakuna Matata ?"
        choix: [
          {txt:"LOL", checked:false}
          {txt:"YOLO, j'en ai rien à fiche !", checked:false}
          {txt:"Sans souci.", checked:false}
          {txt:"Je ne sais pas. En même temps c'est pas français !", checked:false}
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
