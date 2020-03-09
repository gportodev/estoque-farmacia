const Model = use('Model');

class Produto extends Model {
  estoques() {
    return this.belongsToMany('App/Models/Estoque');
  }
}

module.exports = Produto;
