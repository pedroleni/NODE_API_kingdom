const PersonajeRoutes = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
  getByName
} = require('./personaje.controller');

PersonajeRoutes.get('/', getAll)
PersonajeRoutes.get('/:id', getById)
PersonajeRoutes.get('/name/:name', getByName)
PersonajeRoutes.post('/', create)
PersonajeRoutes.patch('/update/:id', update)
PersonajeRoutes.delete('/delete/:id', remove)


module.exports = PersonajeRoutes;