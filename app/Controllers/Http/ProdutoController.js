'use strict'
const Produto = use('App/Models/Produto')

class ProdutoController {

  async index () {
    const produtos = await Produto.all()

    return produtos
  }

  async store ({ request }) {
    const dados = request.all()

    const produto = await Produto.create(dados);

    return produto
  }

  async show ({ params }) {
    const produto = await Produto.findOrFail(params.id)

    return produto
  }

  async update ({ params, request }) {
    const dados = request.all()

    const produto = await Produto.findOrFail(params.id)

    produto.merge(dados)

    await produto.save()

    return produto
  }

  async destroy ({ params }) {
    const produto = await Produto.findOrFail(params.id)

    await produto.delete();

  }
}

module.exports = ProdutoController
