import express from 'express'

import { conectar } from './config/db.js'


const app = express()

app.use(express.json())


await conectar()

app.listen(3001, ()=>{
    console.log('✅  --> https://localhost:3001')
    })