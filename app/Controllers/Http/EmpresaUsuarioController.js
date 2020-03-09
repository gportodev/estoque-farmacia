const EmpresaUsuario = use('App/Models/EmpresaUsuario');

class EmpresaUsuarioController {
  async index() {
    const empresaUsuario = await EmpresaUsuario.all();

    return empresaUsuario;
  }

  async show({ params }) {
    const empresaUsuario = await EmpresaUsuario.findOrFail(params.id);

    return empresaUsuario;
  }

  async store({ request }) {
    const { idEmpresa, idUsuario } = request.only(['idEmpresa', 'idUsuario']);

    const empresaUsuario = await EmpresaUsuario.create({
      idEmpresa,
      idUsuario,
    });

    return empresaUsuario;
  }

  async update({ params, request }) {
    const dados = request.all();

    const empresaUsuario = await EmpresaUsuario.findOrFail(params.id);

    empresaUsuario.merge(dados);

    await empresaUsuario.save();

    return empresaUsuario;
  }

  async destroy({ params }) {
    const empresaUsuario = await EmpresaUsuario.findOrFail(params.id);

    await empresaUsuario.delete();
  }
}

module.exports = EmpresaUsuarioController;
