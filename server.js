import express from 'express'
import cors from 'cors'

import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(express.json())


const MONGODB_URI = 'mongodb+srv://ivanpetersv_db_user:P9ra2e8bP3hFWJEy@cluster0test.p9rvvqn.mongodb.net/version_2'
const PORT = 3001


async  function conectar() {
   await mongoose.connect(MONGODB_URI)
  console.log('🍃 conectada a MongoDB')
}


const conductorSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true},
    licencia: { type: String, required: true, enum: ['A1', 'A2', "B"] },
    antiguedad: { type: Number, min: 0, max: 80},
    rut: { type: String, required: true, unique: true}
}, {
    _id: false
})




const automovilSchema = new mongoose.Schema({
    patente: { type: String, required: true},
    modelo: String,
    marca: String,
    vuela: Boolean,
    conductor: [conductorSchema] 
})

const Automovil = mongoose.model(
    'Automovil',
    automovilSchema,
    'automoviles'
)



app.get('/api/automoviles', async (req, res)=>{

    const automoviles =await  Automovil.find()
   res.json(automoviles)


})

app.get('/api/automoviles/:id', async (req, res)=>{
    const { id } = req.params

    const automovil=await  Automovil.findById(id)
    res.json(automovil)


})

app.post("/api/automoviles", async (req, res)=>{

    const { patente, modelo, marca, conductor}= req.body

           await   Automovil.create({
        patente,
        modelo,
        marca,
        conductor
    })



    res.status(201).send({
        "success":true
    })


})

conectar()

app.listen(PORT, ()=>{
        console.log('ya esta cooriendo el servidor web')
})