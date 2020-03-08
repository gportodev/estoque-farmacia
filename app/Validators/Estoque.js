'use strict'

class Estoque {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      idEmpresa: 'required',
      idProduto: 'required',
      quantidade: 'required',
      valor_unit: 'required'
    }
  }
}

module.exports = Estoque
