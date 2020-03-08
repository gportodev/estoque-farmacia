'use strict'

class Empresa {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      cnpj :'required |unique:empresas ',
      razao_social :'required',
      nome_fantasia :'required',
      cep :'required',
      bairro :'required',
      logradouro :'required',
      cidade :'required',
      estado :'required'
    }
  }
}

module.exports = Empresa
