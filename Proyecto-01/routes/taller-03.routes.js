import express from "express"
import {desglosarString, twoSum, conversionRomana, descomposicion} from "../../taller-03.js"

const taller3Routes = express.Router()

// Punto 1
taller3Routes.post("/desglosarString", (req, res) => {
    try{
        const { cadena, tipo } = req.body
        const cantidad = desglosarString(cadena, tipo)
        res.json({ cantidad })
    } catch (error){
        res.status(400).json({ error: error.message })
    } 
})

// Punto 2
taller3Routes.post("/twoSum", (req, res) => {
    try{
        const { lista, objetivo } = req.body
        const indices = twoSum(lista, objetivo)
        res.json({ indices })
    } catch (error){
        res.status(400).json({ error: error.message })
    }
})

// Punto 3
taller3Routes.post("/conversionRomana", (req, res) => {
    try{
        const { cadena } = req.body
        const cifra_arabiga = conversionRomana(cadena)
        res.json({ cifra_arabiga })
    } catch (error){
        res.status(400).json({ error: error.message })
    }
})

// Punto 4
taller3Routes.post("/descomposicion", (req, res) => {
    try{
        const { palabra } = req.body
        const resultado = descomposicion(palabra)
        res.json({ resultado })
    }
    catch (error){
        res.status(400).json({ error: error.message })
    }
})

export default taller3Routes