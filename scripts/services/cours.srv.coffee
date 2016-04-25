(->
  "use strict"

  Cours = (Users) ->
    all = [
      {
        name:"FAA"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      },
      {
        name:"HECI"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      },
      {
        name:"Compil"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      },
      {
        name:"M3DS"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      },
      {
        name:"CAR"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      },
      {
        name:"TI"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      },
      {
        name:"CANARD"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      },
      {
        name:"IHM"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      },
      {
        name:"SVL"
        docs:
          tp:['un/chemin/tp.pdf']
          td:['un/autre/path/td.pdf']
      }
    ]

    return {
      all: -> all
      nbInscrits: (cours)->
        userarr = ((user for user in Users.all()).map (v)-> (val for _,val of v)[0])
        i = 0
        i++ for u in userarr when cours in u.cours
        i
    }

  Cours.$inject = ['Users']

  angular
    .module "quizee.srv"
    .factory "Cours", Cours

  return
)()
