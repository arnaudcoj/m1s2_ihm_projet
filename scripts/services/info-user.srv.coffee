(->
  "use strict"

  Info = (Auth,Users,Quizee) ->
    information = ->
      if Auth.islogged()
        return Users.user_info(Auth.current().id)


    return {
      nbQuiz: Quizee.size
      username: -> Auth.current().id if Auth.islogged()
      nbCours: -> information().cours if Auth.islogged()
      qzOK: -> (qz for qz in information().quizee when qz.status is 'ok') if Auth.islogged()
      qzKO: -> (qz for qz in information().quizee when qz.status is 'ko') if Auth.islogged()
    }

  Info.$inject = ['Auth','Users','Quizee']

  angular
    .module "quizee.srv"
    .factory "Info", Info

  return
)()
