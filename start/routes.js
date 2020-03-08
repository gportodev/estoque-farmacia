'use strict'
const Route = use('Route')

//Users

Route.post('users', 'UserController.store').validator('User')

Route.group(() => {

  Route.get('users', 'UserController.index')
  Route.get('users/:id', 'UserController.show')

  Route.put('users/:id', 'UserController.update')

  Route.delete('users/:id', 'UserController.destroy')

}).middleware(['auth'])

//-----------------------------------------------------------------------------//

//Session
Route.post('sessions', 'SessionController.store').validator('Session') 

//-----------------------------------------------------------------------------//

//Password

Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword')

Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword')

//-----------------------------------------------------------------------------//

//Produtos
Route.get('produtos', 'ProdutoController.index')
Route.get('produtos/:id', 'ProdutoController.show')

Route.group(() => {

  Route.post('produtos', 'ProdutoController.store').validator('Produto')

  Route.put('produtos/:id', 'ProdutoController.update')

  Route.delete('produtos/:id', 'ProdutoController.destroy')
}).middleware(['auth'])

//-----------------------------------------------------------------------------//

//Empresas
Route.get('empresas', 'EmpresaController.index')
Route.get('empresas/:id', 'EmpresaController.show')

Route.group(() => {

  Route.post('empresas', 'EmpresaController.store').validator('Empresa')

  Route.put('empresas/:id', 'EmpresaController.update')

  Route.delete('empresas/:id', 'EmpresaController.destroy')
}).middleware(['auth'])

//-----------------------------------------------------------------------------//

//Estoques
Route.get('estoques', 'EstoqueController.index')
Route.get('estoques/:id', 'EstoqueController.show')

Route.group(() => {
  
  Route.post('estoques', 'EstoqueController.store').validator('Estoque')

  Route.put('estoques/:id', 'EstoqueController.update')

  Route.delete('estoques/:id', 'EstoqueController.destroy')
}).middleware(['auth'])

// password_confirmation -> reset da senha, cria user



