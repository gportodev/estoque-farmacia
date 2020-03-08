'use strict'

const Estoque = use('App/Models/Estoque')

class EstoqueController {
  
  async index () {
    const estoques = await Estoque.all()
    
    return estoques
  }


  async store ({ request }) {
    const dados = request.all()
    
    const estoque = await Estoque.create(dados);

    return estoque
  }


  async show ({ params }) {
    const estoque = await Estoque.findOrFail(params.id)

    return estoque
  }

 
  async update ({ params, request }) {
    const dados = request.all()

    const estoque = await Estoque.findOrFail(params.id)

    estoque.merge(dados)

    await estoque.save()

    return estoque
  }

 
  async destroy ({ params, request, response }) {
  }
}

module.exports = EstoqueController
