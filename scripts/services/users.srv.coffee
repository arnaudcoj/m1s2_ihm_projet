(->
  "use strict"

  Users = ->
    users = [
      {
        "honore":
          mdp: "honore"
          cours: ["FAA", "IHM", "SVL", "CAR"]
          quizee: [
            {
              id: 3
              status: 'ok'
              errors: []
              aswrIdx:[2]
              selected: []
            }
          ]
      },
      {
        "arnaud":
          mdp: "arnaud"
          cours: ["FAA","IHM", "Compil", "HECI", "M3DS"]
          quizee: [
            {
              id: 2
              status: 'ok'
              errors: []
              aswrIdx:[2]
              selected: []
            }
            {
              id: 3
              status: 'ok'
              errors: []
              aswrIdx:[2]
              selected: []
            }
          ]
      },
      {
        "fabien":
          mdp: "fabien"
          cours: ["FAA","IHM"]
          quizee: []
      },
      {
        "pierre-claver":
          mdp: "pierre-claver"
          cours: ["FAA","IHM","CANARD", "TI"]
          quizee: [
            {
              id: 2
              status: 'ok'
              errors: []
              aswrIdx:[2]
              selected: []
            }
            {
              id: 1
              status: 'ok'
              errors: []
              aswrIdx:[2]
              selected: []
            }
          ]
      },
      {
        "salim":
          mdp: "salim"
          cours: ["IHM", "TI", "CAR"]
          quizee: []
      }
    ]
    current = null

    return {
      all: -> users
      user_info: (user)->
        (q for q in users when user of q)[0][user]
        # console.log "user_info",res
      subscribe: (user,cours) ->
        for u in users
          if (user of u)
            u[user].cours.push cours
      inscrit: (user,cours) ->
        # console.log "ask",user, cours
        for u in users
          # console.log "user", u,user, (user of u)
          if (user of u)
            # console.log "found user"
            if cours in u[user].cours then return yes
        return no
      unsubscribe: (user,cours) ->
        for u in users
          if (user of u)
            elemIdx = u[user].cours.indexOf cours
            u[user].cours.splice elemIdx, 1 if elemIdx > -1
      save_quizee: (quiz,user) ->
        q[user].quizee.push quiz for q in users when user of q
        # console.log "save",users
    }

  angular
    .module "quizee.srv"
    .factory "Users", Users

  return
)()
