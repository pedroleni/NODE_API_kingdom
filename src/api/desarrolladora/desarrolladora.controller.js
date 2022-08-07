const Desarrolladora = require('./desarrolladora.model');
const { setError } = require('../../helpers/utils');
//----------------------------------------------------------------------------------------------
const getAll = async (req, res, next) => {
  try {
    const desarrolladora = await Desarrolladora.find().populate("juegos");
    return res.json({
      status: 200,
      message: 'Recovered all desarrolladora',
      data: { desarrolladora }
    });
  } catch (error) {
    return next(setError(500, 'Failed all desarrolladora'));
  }
}
//----------------------------------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const desarrolladora = await Desarrolladora.findById(id).populate("juegos");
    if (!desarrolladora) return next(setError(404, 'desarrolladora not found'))
    return res.json({
      status: 200,
      message: 'Recovered desarrolladora by id',
      data: { desarrolladora }
    });
  } catch (error) {
    return next(setError(500, 'Failed desarrolladora by id'))
  }
}
//----------------------------------------------------------------------------------------------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const desarrolladora = await Desarrolladora.find({ name: name });
    if (!desarrolladora) return next(setError(404, 'Desarrolladora not found'));
    return res.json({
      status: 200,
      message: 'Recovered desarrolladora by name',
      data: { desarrolladora }
    });
  } catch (error) {
    return next(setError(500, 'Failed desarrolladora by name'))
  }
}
//----------------------------------------------------------------------------------------------
const create = async (req, res, next) => {
  try {
    const desarrolladoraToSave = new Desarrolladora(req.body)
    const desarrolladoraInDb = await desarrolladoraToSave.save()
    return res.json({
      status: 201,
      message: 'Created new desarrolladora',
      data: { desarrolladoraInDb}
    });
  } catch (error) {
    return next(setError(500, 'Failed created desarrolladora'))
  }
}
//----------------------------------------------------------------------------------------------
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const desarrolladora = new Desarrolladora(req.body);
    desarrolladora._id = id;
    const updateDesarrolladora = await Desarrolladora.findByIdAndUpdate(id, desarrolladora);
    if (!desarrolladora) return next(setError(404, 'Desarrolladora not found'))
    return res.json({
      status: 200,
      message: 'Updated desarrolladora by id',
      data: { updateDesarrolladora}
    });
  } catch (error) {
    return next(setError(500, 'Failed desarrolladora Update by id'))
  }
}
//----------------------------------------------------------------------------------------------
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const desarrolladoraRemoved = await Desarrolladora.findByIdAndDelete(id);
    if (!desarrolladoraRemoved) return next(setError(404, 'Desarrolladora not found'));
    return res.json({
      status: 200,
      message: 'Removed desarrolladora by id',
      data: { desarrolladoraRemoved }
    });
  } catch (error) {
    return next(setError(500, 'Failed desarrolladora Remove by id'))
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