(->
  "use strict"

  Auth = (Users) ->
    users =
      for user in Users.all()
        key = Object.keys(user)[0]
        res = {}
        res[key] = user[key].mdp
        res
    current = null

    return {
      users: -> users
      current: -> current
      signin: (username,pass) ->
        u = (user for user in users when username of user)
        ok = u[0][username] is pass if u.length is 1
        console.log "user trouve",u,ok
        current = id: username if ok
        ok
      signout: ->
        current = null
      islogged: ->
        current?
    }

    Auth.$inject = ['Users']

  angular
    .module "quizee.srv"
    .factory "Auth", Auth

  return
)()
