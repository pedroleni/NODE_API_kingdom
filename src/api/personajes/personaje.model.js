const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  imagen: { type: String, required: true },
  origen: { type: String },
  papel: { type: String },
  juego: [{ type: Schema.Types.ObjectId, ref: "juegos" }],

  
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('personajes', schema);