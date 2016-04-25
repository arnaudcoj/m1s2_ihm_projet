(->
  "use strict"

  Users = ->
    users = [
      {
        "honore":
          mdp: "honore"
          cours: ["FAA", "IHM", "SVL", "CAR"]
          quizee: []
      },
      {
        "arnaud":
          mdp: "arnaud"
          cours: ["FAA","IHM", "Compil", "HECI", "M3DS"]
          quizee: []
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
          quizee: []
      },
      {
        "salim":
          mdp: "salim"
          cours: ["FAA","IHM", "TI", "CAR"]
          quizee: []
      }
    ]
    current = null

    return {
      all: () -> users
      cours: (user) -> user.cours
      user_info: (user)->
        res = (q for q in users when user of q)[0][user]
        console.log "user_info",res
        res
      subscribe: (user,cours) -> users[user]?.cours.push cours
      inscrit: (user,cours) ->
        # console.log "ask",user, cours
        for u in users
          # console.log "user", u,user, (user of u)
          if (user of u)
            # console.log "found user"
            if cours in u[user].cours then return yes
        return no
      unsubscribe: (user,cours) ->
        elemIdx = users[user]?.cours.indexOf cours
        users[user]?.splice elemIdx, 1 if elemIdx >= 0
      save_quizee: (quiz,user) ->
        q[user].quizee.push quiz for q in users when user of q
        console.log "save",users
    }

  angular
    .module "quizee.srv"
    .factory "Users", Users

  return
)()
