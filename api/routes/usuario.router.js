const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  const usuarios = [];
  const { size } = req.query; // Pasamos el tamaño de cantidad de parámetros
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    usuarios.push({
      nombre_usuario: faker.person.firstName(),
      correo_electronico: faker.internet.email(),
      contrasenia: faker.internet.password(),
      fecha_nacimiento: faker.date.birthdate(),
      foto_perfil: faker.image.avatarGitHub(),
    });
  }
  res.json(usuarios);
});

router.get('/filter', (req, res) => { // Todo lo específico debe ir antes de lo que es dinámico
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Carlos Ricardo",
    usuario: "Chairo"
  });
});

// Los querys params pueden ayudarme a paginar o filtrar
// router.get('/usuario', (req, res) => { // Recibimos párametros tipo query
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send('No hay parametros');
//   }
// });

module.exports = router; // Estamos separando la responsabilidad, en router se va a routear todo
