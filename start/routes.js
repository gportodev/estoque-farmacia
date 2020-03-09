const Route = use('Route');

Route.group(() => {
  Route.resource('/users', 'UserController')
    .apiOnly()
    .except(['store']);

  Route.post('/users', 'UserController.store').validator('User');
}).middleware(['auth', 'is:(farmaceutico)']);

Route.resource('permissions', 'PermissionController')
  .apiOnly()
  .middleware(['auth', 'is:(farmaceutico)']);

Route.resource('roles', 'RoleController')
  .apiOnly()
  .middleware(['auth', 'is:(farmaceutico)']);

Route.post('sessions', 'SessionController.store').validator('Session');

Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
);

Route.put('passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
);

Route.group(() => {
  Route.resource('/produtos', 'ProdutoController')
    .apiOnly()
    .except(['store']);

  Route.post('produtos', 'ProdutoController.store').validator('Produto');
}).middleware(['auth', 'is:(farmaceutico)']);

Route.group(() => {
  Route.resource('/empresas', 'EmpresaController')
    .apiOnly()
    .except(['store']);

  Route.post('empresas', 'EmpresaController.store').validator('Empresa');
}).middleware(['auth', 'is:(farmaceutico)']);

Route.get('/estoques', 'EstoqueController.index').middleware([
  'auth',
  'can:read_estoques',
]);

Route.get('/estoques/:id', 'EstoqueController.show').middleware([
  'auth',
  'can:read_estoques',
]);

Route.group(() => {
  Route.resource('/estoques', 'EstoqueController')
    .apiOnly()
    .except(['index', 'show', 'store']);

  Route.post('estoques', 'EstoqueController.store').validator('Estoque');
}).middleware(['auth', 'is:(farmaceutico)']);
