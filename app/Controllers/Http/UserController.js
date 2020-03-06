'use strict'

const User = use('App/Models/User')

const Empresa_usuario = use('App/Models/EmpresaUsuario')

class UserController {

  async index () {
    const usuarios = await User.all()

    return usuarios
  }

  async show ({ params }) {
    const usuarios = await User.findOrFail(params.id)

    return usuarios
  }

  async store({ request }) {

    const dados = request.only(['username', 'email', 'password']);

    const user = await User.create(dados);


    return user;
  }

  async update({ params, request}) {

    const dados = request.only(['username', 'email', 'password']);

    const user = await User.findOrFail(params.id)
  
    user.merge(dados)

    await user.save()

    return user

  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }

  async link({ request }) {

    const dados = request.only(['idEmpresa', 'idUsuario'])

    const vinculo = await Empresa_usuario.create(dados);

    return vinculo
  }
}

module.exports = UserController
