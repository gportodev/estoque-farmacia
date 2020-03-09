'use strict'

const Model = use('Model')

class Estoque extends Model {
  produtos () {
    return this
      .belongsToMany('App/Models/Produto')
  }
}

module.exports = Estoque
