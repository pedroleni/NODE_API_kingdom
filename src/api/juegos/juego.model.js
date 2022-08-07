const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  imagen: { type: String, required: true },
  logo: { type: String },
  fecha: { type: Number },
  consolas: [{ type: Schema.Types.ObjectId, ref: "consolas" }],
  personajes: [{ type: Schema.Types.ObjectId, ref: "personajes" }],
  desarrolladora: [{ type: Schema.Types.ObjectId, ref: "desarrolladora" }],
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('juegos', schema);