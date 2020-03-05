'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstoqueSchema extends Schema {
  up () {
    this.create('estoques', (table) => {
      table.increments()
      table.unique(['idEmpresa', 'idProduto'])
      table.integer('idEmpresa').notNullable().references('id')
      .inTable('empresas')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.integer('idProduto').notNullable().references('id')
      .inTable('produtos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE') 
      table.decimal('quantidade', 20, 5).notNullable()
      table.decimal('valor_unit', 20, 5).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estoques')
  }
}

module.exports = EstoqueSchema
