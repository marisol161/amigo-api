const express = require('express')
const usuarioRouter = require('./usuario.router');
const amigoRouter = require('./amigo.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/usuario', usuarioRouter);
  router.use('/amigo', amigoRouter);
}

module.exports = routerApi;
