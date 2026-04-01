import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";

const obtenerInfoFormacion = async (req, res) =>{
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, "../db/academic.json");
    const data = JSON.parse(fs.readFileSync(filePath,"utf-8"));
    res.json(data)

}

export {
    obtenerInfoFormacion
}