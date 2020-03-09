const Antl = use('Antl');

class Produto {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      nome: 'required',
      descricao: 'required',
      unidade: 'required',
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Produto;
