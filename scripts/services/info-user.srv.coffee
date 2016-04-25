(->
  "use strict"

  Info = (Auth,Users,Quizee) ->
    information = ->
      if Auth.islogged()
        console.log Auth.current().id
        return Users.user_info(Auth.current().id)


    return {
      nbQuiz: Quizee.size
      username: -> Auth.current().id if Auth.islogged()
      nbCours: -> information().cours.length if Auth.islogged()
      qzOK: -> (qz for qz in information().quizee when qz.status is 'ok').length if Auth.islogged()
      qzKO: -> (qz for qz in information().quizee when qz.status is 'ko').length if Auth.islogged()
    }

  Info.$inject = ['Auth','Users','Quizee']

  angular
    .module "quizee.srv"
    .factory "Info", Info

  return
)()
