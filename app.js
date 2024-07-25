import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {test} from './backend/controllers/user.controller.js'

dotenv.config();


mongoose.connect(process.env.urlbd)
.then (()=>{
    console.log ('si funciona mi conexion a la base de datos')
})
.catch ((error)=> {
    console.log ('no funciona mi conexion a la base datos', error)
})

const app = express();
app.use(cors());

app.listen(4000, ()=>{
    console.log ('funciona mi servidor local')
})

test()

