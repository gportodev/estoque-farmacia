const Server = use('Server');

const globalMiddleware = [
  'Adonis/Middleware/BodyParser',
  'Adonis/Acl/Init',
  'App/Middleware/ConvertEmptyStringsToNull',
];

const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',
  is: 'Adonis/Acl/Is',
  can: 'Adonis/Acl/Can',
  guest: 'Adonis/Middleware/AllowGuestOnly',
};

const serverMiddleware = ['Adonis/Middleware/Cors'];

Server.registerGlobal(globalMiddleware)
  .registerNamed(namedMiddleware)
  .use(serverMiddleware);
