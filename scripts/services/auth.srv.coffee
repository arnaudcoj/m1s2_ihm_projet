(->
  "use strict"

  Auth = ->
    users =
      "honore": "honore"
      "arnaud": "arnaud"
      "fabien": "fabien"
      "pierre-claver": "pierre-claver"
      "salime": "salim"
    current = null

    return {
      users
      current: -> current
      signin: (username,pass) ->
        ok = users[username] is pass
        current = id: username if ok
        ok
      signout: ->
        current = null
      islogged: ->
        current?
    }

  angular
    .module "quizee"
    .factory "auth", Auth

  return
)()
