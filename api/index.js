const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
const IP = "127.0.0.1";

app.get('/', (req, res) => {
  res.send("Hola este es mi servidor desde express");
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

// Capturamos los parametros atráves de la URL
// app.get('/amigos/:amigoId/usuario/:usuarioId', (req, res) => {
//   const { amigoId, usuarioId } = req.params;
//   res.json({
//     amigoId,
//     usuarioId
//   });
// })


routerApi(app);

app.listen(port, () => {
  console.log('Servidor corriendo en http://'+IP+':'+port);
});
