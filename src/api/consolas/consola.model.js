const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  imagen: { type: String, unique: true, required: true },
  logo: { type: String, unique: true },
  fecha: { type: Number },
  ventas: { type: Number },
  creador: {type: String, required: true },
  juegos: [{ type: Schema.Types.ObjectId, ref: "juegos" }]
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('consolas', schema);