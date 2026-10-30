
import mongoose from 'mongoose'

const resultadoSchema = new mongoose.Schema({
    club: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Club', required: true,
        },
    goles: Number
})
export const partidoSchema = new mongoose.Schema({
  local: {
    type: resultadoSchema
  } ,
  visita: {
    type: resultadoSchema
  },
  estadio: { type: String, required: true }
})