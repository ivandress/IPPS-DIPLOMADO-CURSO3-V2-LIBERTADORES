import mongoose from 'mongoose'


const paisSchema = new mongoose.Schema({
    nombre: String
})

const jugadorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    numero: { type: Number, required: true, min: 1, max: 99 },
    posicion: {
      type: String, required: true,
      enum: ['arquero', 'defensa',
             'mediocampista', 'delantero'],
    },
  },
  { _id: false },
)

const clubSchema = new mongoose.Schema({
    nombre: String,
    paisId: { type : paisSchema},
    titulos: [Number],
    jugadores: [jugadorSchema],
  },
  { timestamps: true }
)

export const Club = mongoose.model(
    'Club',
    clubSchema,
    'clubes'
)