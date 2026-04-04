import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'

import {
  obtenerScreenshots,
  obtenerInfoSites
} from './controllers/screenShotsController.js'

import {obtenerInfoFormacion} from './controllers/formacionController.js'


const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.post("/preview",obtenerScreenshots)
app.get("/infoSites",obtenerInfoSites)
app.get("/infoFormacion",obtenerInfoFormacion)


app.listen(PORT, () => {
  console.log( 'Servidor iniciado');
});

