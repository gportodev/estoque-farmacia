const Antl = use('Antl');

class Estoque {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      idEmpresa: 'required',
      idProduto: 'required',
      quantidade: 'required',
      valor_unit: 'required',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Estoque;
