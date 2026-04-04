import puppeteer from "puppeteer";
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";
import sharp from "sharp";

const obtenerScreenshots = async (req, res) => {
    const { url } = req.body;
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: puppeteer.executablePath(),
        args:[
            '--no-sandbox',
            '--disable-setuid-sandbox'        
        ]
    });
    
    
    const page = await browser.newPage();

    await page.setViewport({
        width: 1920,
        height: 1080
    })

    await page.goto(`${url}`, { waitUntil: "networkidle2" });

    const buffer = await page.screenshot({
        type:'jpeg',
        quality:70
    });

    const resized = await sharp(buffer)
        .resize(250, 250, {
            fit: "inside" // mantiene proporción
        })
        .jpeg({ quality: 70 })
        .toBuffer()

    await browser.close();

    res.set("Content-Type", "image/jpeg");
    res.send(resized);
}


const obtenerInfoSites = async (req,res) =>{
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, "../db/sites.json");
    const data = JSON.parse(fs.readFileSync(filePath,"utf-8"));
    res.json(data)

}

export {
    obtenerScreenshots,
    obtenerInfoSites
}


