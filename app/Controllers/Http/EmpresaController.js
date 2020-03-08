'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Empresa = use('App/Models/Empresa')

class EmpresaController {
  
  async index () {
    const empresas = await Empresa.all()

    return empresas
  }

  async store ({ request }) {
    const dados = request.all()

    const empresa = await Empresa.create(dados);

    return empresa
  }

  async show ({ params }) {
    const empresa = await Empresa.findOrFail(params.id)

    return empresa
  }

  async update ({ params, request }) {
    const dados = request.all()

    const empresa = await Empresa.findOrFail(params.id)

    empresa.merge(dados)

    await empresa.save()

    return empresa
  }

  async destroy ({ params }) {
    const empresa = await Empresa.findOrFail(params.id)

    await empresa.delete();
  }
}

module.exports = EmpresaController
