const Schema = use('Schema');

class ProdutoSchema extends Schema {
  up() {
    this.create('produtos', table => {
      table.increments();
      table.string('nome', 255).notNullable();
      table.text('descricao', 'longtext').notNullable();
      table.enu('unidade', ['CX', 'UN', 'PC', 'KG']).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('produtos');
  }
}

module.exports = ProdutoSchema;
