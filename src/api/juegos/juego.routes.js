const juegoRoutes = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('./juego.controller');

juegoRoutes.get('/', getAll)
juegoRoutes.get('/:id', getById)
juegoRoutes.post('/', create)
juegoRoutes.patch('/update/:id', update)
juegoRoutes.delete('/delete/:id', remove)


module.exports = juegoRoutes;