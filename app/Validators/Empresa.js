'use strict'

const Antl = use('Antl')

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

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Empresa
