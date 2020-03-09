const Model = use('Model');

class Empresa extends Model {
  users() {
    return this.belongsToMany('App/Models/User');
  }
}

module.exports = Empresa;
