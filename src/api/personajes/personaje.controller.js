const Personaje = require('./personaje.model');
const { setError } = require('../../helpers/utils');
//----------------------------------------------------------------------------------------------
const getAll = async (req, res, next) => {
  try {
    const personaje = await Personaje.find().populate("juego");
    return res.json({
      status: 200,
      message: 'Recovered all personajes',
      data: { personaje }
    });
  } catch (error) {
    return next(setError(500, 'Failed all personajes '));
  }
}
//----------------------------------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const personaje = await Personaje.findById(id).populate("juego");
    if (!personaje) return next(setError(404, 'Personaje not found'))
    return res.json({
      status: 200,
      message: 'Recovered personaje by id',
      data: { personaje }
    });
  } catch (error) {
    return next(setError(500, 'Failed personaje by id'))
  }
}
//----------------------------------------------------------------------------------------------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const personaje = await Personaje.find({ name: name });
    if (!personaje) return next(setError(404, 'Personaje not found'));
    return res.json({
      status: 200,
      message: 'Recovered personaje by name',
      data: { personaje }
    });
  } catch (error) {
    return next(setError(500, 'Failed personaje by name'))
  }
}
//----------------------------------------------------------------------------------------------
const create = async (req, res, next) => {
  try {
    const personajeToSave = new Personaje(req.body)
    const personajeInDb = await personajeToSave.save()
    return res.json({
      status: 201,
      message: 'Created new personaje',
      data: { personajeInDb }
    });
  } catch (error) {
    return next(setError(500, 'Failed created personaje'))
  }
}
//----------------------------------------------------------------------------------------------
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const personaje = new Personaje(req.body);
    personaje._id = id;
    const updatePersonaje = await Personaje.findByIdAndUpdate(id, personaje);
    if (!personaje) return next(setError(404, 'Personaje not found'))
    return res.json({
      status: 200,
      message: 'Updated personaje by id',
      data: { updatePersonaje}
    });
  } catch (error) {
    return next(setError(500, 'Failed personaje Update by id'))
  }
}
//----------------------------------------------------------------------------------------------
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const personajeRemoved = await Personaje.findByIdAndDelete(id);
    if (!personajeRemoved) return next(setError(404, 'Personaje not found'));
    return res.json({
      status: 200,
      message: 'Removed personaje by id',
      data: { personajeRemoved }
    });
  } catch (error) {
    return next(setError(500, 'Failed personaje Remove by id'))
  }
}
//----------------------------------------------------------------------------------------------
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByName
}