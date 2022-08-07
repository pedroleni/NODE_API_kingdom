const Juego = require('./juego.model');
const { setError } = require('../../helpers/utils');
//----------------------------------------------------------------------------------------------
const getAll = async (req, res, next) => {
  try {
    const juego = await Juego.find().populate("consolas personajes desarrolladora");
    return res.json({
      status: 200,
      message: 'Recovered all juegos',
      data: { juego }
    });
  } catch (error) {
    return next(setError(500, 'Failed all juegos'));
  }
}
//----------------------------------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const juego = await Juego.findById(id).populate("consolas personajes desarrolladora");
    if (!juego) return next(setError(404, 'juego not found'))
    return res.json({
      status: 200,
      message: 'Recovered juego by id',
      data: { juego }
    });
  } catch (error) {
    return next(setError(500, 'Failed juego by id'))
  }
}
//----------------------------------------------------------------------------------------------
const create = async (req, res, next) => {
  try {
    const juegoToSave = new Juego(req.body)
    const juegoInDb = await juegoToSave.save()
    return res.json({
      status: 201,
      message: 'Created new juego',
      data: { juegoInDb }
    });
  } catch (error) {
    return next(setError(500, 'Failed created juego'))
  }
}
//----------------------------------------------------------------------------------------------
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juego = new Juego(req.body);
    juego._id = id;
    const updateJuego = await Juego.findByIdAndUpdate(id, juego);
    if (!juego) return next(setError(404, 'Juego not found'))
    return res.json({
      status: 200,
      message: 'Updated juego by id',
      data: { updateJuego }
    });
  } catch (error) {
    return next(setError(500, 'Failed juego Update by id'))
  }
}
//----------------------------------------------------------------------------------------------
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juegoRemoved = await Juego.findByIdAndDelete(id);
    if (!juegoRemoved) return next(setError(404, 'Juego not found'));
    return res.json({
      status: 200,
      message: 'Removed juego by id',
      data: { juegoRemoved }
    });
  } catch (error) {
    return next(setError(500, 'Failed cantante Remove by id'))
  }
}
//----------------------------------------------------------------------------------------------
module.exports = {
  getAll,
  getById,
  create,
  remove,
  update
}