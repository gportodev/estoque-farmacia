'use strict'
const Route = use('Route')

//Users





Route.group(() => {
  Route.resource('/users', 'UserController')
  .apiOnly()
  .except(['index', 'show'])

  Route.post('/users', 'UserController.store').validator('User')

}).middleware(['auth', 'is:(administrator || moderator'])

Route.get('/users', 'UserController.index')
  .middleware(['auth', 'can:read_users'])

Route.get('/users/:id', 'UserController.show')
  .middleware(['auth', 'can:read_users'])

//-----------------------------------------------------------------------------//

//Permissions

Route.resource('permissions', 'PermissionController')
  .apiOnly()
  .middleware('auth')

//-----------------------------------------------------------------------------//

//Roles

Route.resource('roles', 'RoleController')
  .apiOnly()
  .middleware('auth')

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



