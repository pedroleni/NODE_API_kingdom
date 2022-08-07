const DesarrolladoraRoutes = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('./desarrolladora.controller');

DesarrolladoraRoutes.get('/', getAll)
DesarrolladoraRoutes.get('/:id', getById)
DesarrolladoraRoutes.post('/', create)
DesarrolladoraRoutes.patch('/update/:id', update)
DesarrolladoraRoutes.delete('/delete/:id', remove)


module.exports = DesarrolladoraRoutes;