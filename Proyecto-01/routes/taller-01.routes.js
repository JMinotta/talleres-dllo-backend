import express from "express"
import {convertidorTemp, resolvedor, mejorParidad, peorParidad} from "../../taller-01.js"

const taller1Routes = express.Router()

// Punto 1
taller1Routes.post("/convertirTemp", async (req, res) => {
  try{
    const {temperatura} = req.body
    const resultado = convertidorTemp(temperatura)
    res.json({ resultado })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

})

// Punto 2
taller1Routes.post("/resolvente", async (req, res) => {
  try {
    const { a, b, c, resultadoPositivo } = req.body;
    const resultado = resolvedor(a, b, c, resultadoPositivo)
    res.json({ resultado })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Punto 3
taller1Routes.post("/mejorParidad", async (req, res) => {
  try {
    const { numero } = req.body;
    const resultado = mejorParidad(numero)
    res.json({ resultado })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Punto 4
taller1Routes.post("/peorParidad", async (req, res) => {
  try {
    const { numero } = req.body;
    const resultado = peorParidad(numero)
    res.json({ resultado })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default taller1Routes