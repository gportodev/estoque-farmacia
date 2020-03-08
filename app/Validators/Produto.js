'use strict'

class Produto {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      nome: 'required',
      descricao: 'required',
      unidade: 'required'
    }
  }
}

module.exports = Produto
