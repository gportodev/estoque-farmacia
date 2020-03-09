'use strict'

class EmpreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      idEmpresa: 'required',
      idUsuario: 'required',
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = EmpreUser
