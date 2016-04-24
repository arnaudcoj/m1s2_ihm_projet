(->
  "use strict"

  Users = ->
    users = [
      {
        "honore":
          mdp: "honore"
          cours: ["FAA", "IHM", "SVL", "CAR"]
      },
      {
        "arnaud":
          mdp: "arnaud"
          cours: ["FAA","IHM", "Compil", "HECI", "M3DS"]
      },
      {
        "fabien":
          mdp: "fabien"
          cours: ["FAA","IHM"]
      },
      {
        "pierre-claver":
          mdp: "pierre-claver"
          cours: ["FAA","IHM","CANARD", "TI"]
      },
      {
        "salim":
          mdp: "salim"
          cours: ["FAA","IHM", "TI", "CAR"]
      }
    ]
    current = null

    return {
      all: () -> users
      cours: (user) -> user.cours
      subscribe: (user,cours) -> users[user]?.cours.push cours
      inscrit: (user,cours) ->
        console.log "ask",user, cours
        for u in users
          console.log "user", u,user, (user of u)
          if (user of u)
            console.log "found user"
            if cours in u[user].cours then return yes
        return no
      unsubscribe: (user,cours) ->
        elemIdx = users[user]?.cours.indexOf cours
        users[user]?.splice elemIdx, 1 if elemIdx >= 0
    }

  angular
    .module "quizee.srv"
    .factory "Users", Users

  return
)()
