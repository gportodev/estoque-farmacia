'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const dados = request.only(['username', 'email', 'password']);

    const user = await User.create(dados);

    return user;
    
  }

  async update({ params, request}) {

    const dados = request.only(['username']);

    const user = await User.findOrFail(params.id)
  
    user.merge(dados)

    await user.save()

    return user

  }

  async destroy({ params, request, response }) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}

module.exports = UserController
