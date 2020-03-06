'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaUsuarioSchema extends Schema {
  up () {
    this.create('empresa_usuarios', (table) => {
      table.increments()
      table.unique(['idEmpresa', 'idUsuario'])
      table
       .integer('idEmpresa')
       .notNullable()
       .references('id')
       .inTable('empresas')
       .onUpdate('CASCADE')
       .onDelete('CASCADE')
      table
        .integer('idUsuario')
        .notNullable()
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
