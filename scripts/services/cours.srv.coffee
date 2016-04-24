(->
  "use strict"

  Cours = ->
    all = [
      "FAA", "HECI", "Compil"
      "M3DS", "CAR", "TI"
      "CANARD", "IHM", "SVL"
    ]

    return {
      all: -> all
    }

  angular
    .module "quizee.srv"
    .factory "Cours", Cours

  return
)()
