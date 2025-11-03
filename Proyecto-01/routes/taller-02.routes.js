import express from "express"
import {findMax, includes, sum, missingNumbers} from "../../taller-02.js"

const taller2Routes = express.Router()

// Punto 1
taller2Routes.post("/findMax", (req, res) => {
    try{
        const { lista } = req.body
        const max = findMax(lista)
        res.json({ max })
    } catch (error){
        res.status(400).json({ error: error.message })
    }
})

// Punto 2
taller2Routes.post("/includes", (req, res) => {
    try{
        const { lista, elemento } = req.body
        const encontrado = includes(lista, elemento)
        res.json({ encontrado })
    } catch (error){
        res.status(400).json({ error: error.message })
    }
})

// Punto 3
taller2Routes.post("/sum", (req, res) => {
    try{
        const { lista } = req.body
        const total = sum(lista)
        res.json({ total })
    } catch (error){
        res.status(400).json({ error: error.message })
    }
})

// Punto 4
taller2Routes.post("/missingNumbers", (req, res) => {
    try{
        const { lista } = req.body
        const faltantes = missingNumbers(lista)
        res.json({ faltantes })
    } catch (error){
        res.status(400).json({ error: error.message })
    }
})

export default taller2Routes