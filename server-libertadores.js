import express from 'express'

import { conectar } from './config/db.js'

import { clubRoutes } from './routes/club.routes.js'


const app = express()

app.use(express.json())

app.use('/clubes', clubRoutes)

await conectar()

app.listen(3001, ()=>{
    console.log('✅  --> https://localhost:3001')
    })