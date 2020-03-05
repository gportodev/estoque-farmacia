'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaUsuarioSchema extends Schema {
  up () {
    this.create('empresa_usuarios', (table) => {
      table.increments()
      table
       .integer('idEmpresa')
       .notNullable()
       .unique()
       .references('id')
       .inTable('empresas')
       .onUpdate('CASCADE')
       .onDelete('CASCADE')
      table
        .integer('idUsuario')
        .notNullable()
        .unique()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('empresa_usuarios')
  }
}

module.exports = EmpresaUsuarioSchema
