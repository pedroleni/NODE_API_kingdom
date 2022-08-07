const Consola = require('./consola.model');
const { setError } = require('../../helpers/utils');
//----------------------------------------------------------------------------------------------
const getAll = async (req, res, next) => {
  try {
    const consola = await Consola.find().populate("juegos");
    return res.json({
      status: 200,
      message: 'Recovered all consolas',
      data: { consola}
    });
  } catch (error) {
    return next(setError(500, 'Failed all consolas'));
  }
}
//----------------------------------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const consola = await Consola.findById(id).populate("juegos");
    if (!consola) return next(setError(404, 'Consola not found'))
    return res.json({
      status: 200,
      message: 'Recovered consola by id',
      data: { consola }
    });
  } catch (error) {
    return next(setError(500, 'Failed consola by id'))
  }
}
//----------------------------------------------------------------------------------------------
const create = async (req, res, next) => {
  try {
    const consolaToSave = new Consola(req.body)
    const consolaInDb = await consolaToSave.save()
    return res.json({
      status: 201,
      message: 'Created new consola',
      data: { consolaInDb }
    });
  } catch (error) {
    return next(setError(500, 'Failed created consola'))
  }
}
//----------------------------------------------------------------------------------------------
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consola = new Consola(req.body);
    consola._id = id;
    const updateConsola = await Consola.findByIdAndUpdate(id, consola);
    if (!consola) return next(setError(404, 'Consola not found'))
    return res.json({
      status: 200,
      message: 'Updated consola by id',
      data: { updateConsola }
    });
  } catch (error) {
    return next(setError(500, 'Failed consola Update by id'))
  }
}
//----------------------------------------------------------------------------------------------
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consolaRemoved = await Consola.findByIdAndDelete(id);
    if (!consolaRemoved) return next(setError(404, 'Consola not found'));
    return res.json({
      status: 200,
      message: 'Removed consola by id',
      data: { consolaRemoved}
    });
  } catch (error) {
    return next(setError(500, 'Failed consola Remove by id'))
  }
}
//----------------------------------------------------------------------------------------------
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}