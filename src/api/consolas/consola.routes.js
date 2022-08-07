const ConsolaRoutes = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('./consola.controller');

ConsolaRoutes.get('/', getAll)
ConsolaRoutes.get('/:id', getById)
ConsolaRoutes.post('/', create)
ConsolaRoutes.patch('/update/:id', update)
ConsolaRoutes.delete('/delete/:id', remove)


module.exports = ConsolaRoutes;