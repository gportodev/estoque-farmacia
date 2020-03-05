'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table.string('cnpj', 14).notNullable().unique()
      table.string('razao_social', 255).notNullable()
      table.string('nome_fantasia', 255).notNullable()
      table.string('cep', 8).notNullable()
      table.string('bairro', 255).notNullable()
      table.string('logradouro', 255).notNullable()
      table.string('cidade', 255).notNullable()
      table.string('estado', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
