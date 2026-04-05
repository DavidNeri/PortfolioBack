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

var whitelist = [process.env.FRONTEND,process.env.BACKEND]
var corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

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

