const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  imagen: { type: String, unique: true, required: true },
  logo: { type: String, unique: true, required: true },
  creacion: { type: Number, unique: true, required: true },
  empleados: { type: Number },
  franquicias: [{ type: String }],
  juegos:[{ type: Schema.Types.ObjectId, ref: "juegos" }]
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('desarrolladora', schema);